package parser

import (
	"fmt"
	"github.com/davidkhala/goutils"
	"testing"
)

func TestSelect(t *testing.T) {
	var sql = "select a, b from tableName"
	astNode, err := parse(sql)
	goutils.PanicError(err)
	fmt.Printf("%v\n", extract(astNode))
}
