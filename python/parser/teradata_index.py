from antlr4 import *
from parser.teradata.TeradataParser import TeradataParser
from parser.teradata.TeradataListener import TeradataListener
from parser.teradata.TeradataLexer import TeradataLexer


def parse(sql: str, listener: TeradataListener):
    input_stream = InputStream(sql)
    lexer = TeradataLexer(input_stream)
    stream = CommonTokenStream(lexer)
    parser = TeradataParser(stream)
    tree = parser.parse()

    walker = ParseTreeWalker()
    walker.walk(listener, tree)
