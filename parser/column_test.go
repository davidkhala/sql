package parser

import (
	"fmt"
	"testing"
)

func TestSelect(t *testing.T) {
	var sql = "select a, b from tableName"
	astNode := Parse(sql)

	fmt.Printf("%v\n", extract(&astNode[0]))
}
