package parser

import (
	"github.com/davidkhala/goutils"
	"github.com/pingcap/log"
	"github.com/pingcap/tidb/parser"
	"github.com/pingcap/tidb/parser/ast"
	_ "github.com/pingcap/tidb/parser/test_driver"
)

func Parse(sql string) []ast.StmtNode {
	p := parser.New()

	stmtNodes, warns, err := p.Parse(sql, "", "")
	goutils.PanicError(err)
	for _, warn := range warns {
		log.Warn(warn.Error())
	}

	return stmtNodes
}

type colX struct {
	colNames []string
}

func (v *colX) Enter(in ast.Node) (ast.Node, bool) {
	if name, ok := in.(*ast.ColumnName); ok {
		v.colNames = append(v.colNames, name.Name.O)
	}
	return in, false
}

func (v *colX) Leave(in ast.Node) (ast.Node, bool) {
	return in, true
}
func extract(rootNode *ast.StmtNode) []string {
	v := &colX{}
	(*rootNode).Accept(v)
	return v.colNames
}
