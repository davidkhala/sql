import unittest
from parser.teradata_index import parse
from python.parser.teradata.TeradataListener import TeradataListener
from python.parser.teradata.TeradataParser import TeradataParser


class HelloPrintListener(TeradataListener):
    def enterSql_stmt(self, ctx: TeradataParser.Sql_stmtContext):
        print("enterSql_stmt")
        super().enterSql_stmt(ctx)

    def exitSql_stmt(self, ctx: TeradataParser.Sql_stmtContext):
        print("exitSql_stmt")
        super().exitSql_stmt(ctx)


class TestParser(unittest.TestCase):
    def test_parse_sql(self):
        sql = """DROP SCHEMA IF EXISTS DBC;
        CREATE SCHEMA DBC;

        CREATE TABLE DBC.COLUMNSV
        (
            DatabaseName VARCHAR(128),
            TableName VARCHAR(128),
            ColumnName VARCHAR(128)
        );

        INSERT INTO DBC.COLUMNSV(DatabaseName,TableName,ColumnName) VALUES ('PDCRINFO','DBQLSqlTbl_Hst','SqlTextInfo');
        INSERT INTO DBC.COLUMNSV(DatabaseName,TableName,ColumnName) VALUES ('SYSDBA','TestA','ColumnOne');
        INSERT INTO DBC.COLUMNSV(DatabaseName,TableName,ColumnName) VALUES ('SYSDBA','TestA','ColumnTwo');
        INSERT INTO DBC.COLUMNSV(DatabaseName,TableName,ColumnName) VALUES ('SYSDBA','TestA','ColumnThree');
        INSERT INTO DBC.COLUMNSV(DatabaseName,TableName,ColumnName) VALUES ('SYSDBA','TestB','ColumnOne');
        INSERT INTO DBC.COLUMNSV(DatabaseName,TableName,ColumnName) VALUES ('SYSDBA','TestB','ColumnTwo');
        INSERT INTO DBC.COLUMNSV(DatabaseName,TableName,ColumnName) VALUES ('SYSDBA','TestB','ColumnThree');"""
        select_statement = "SELECT * FROM DBC.COLUMNSV;"
        listener = HelloPrintListener()
        parse(select_statement, listener)


if __name__ == '__main__':
    unittest.main()
