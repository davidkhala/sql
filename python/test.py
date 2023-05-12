# FIXME WIP
from antlr4 import *

from python.parser.teradata.TeradataLexer import TeradataLexer
from python.parser.teradata.TeradataListener import TeradataListener
from python.parser.teradata.TeradataParser import TeradataParser


class HelloPrintListener(TeradataListener):
    def enterHi(self, ctx):
        print("Hello: %s" % ctx.ID())


def main():
    lexer = TeradataLexer(StdinStream())
    stream = CommonTokenStream(lexer)
    parser = TeradataParser(stream)
    tree = parser.parse()
    printer = HelloPrintListener()
    walker = ParseTreeWalker()
    walker.walk(printer, tree)


if __name__ == '__main__':
    main()
