# Generated from grammar/Teradata.G4 by ANTLR 4.12.0
from antlr4 import *
if __name__ is not None and "." in __name__:
    from .TeradataParser import TeradataParser
else:
    from TeradataParser import TeradataParser

# This class defines a complete listener for a parse tree produced by TeradataParser.
class TeradataListener(ParseTreeListener):

    # Enter a parse tree produced by TeradataParser#parse.
    def enterParse(self, ctx:TeradataParser.ParseContext):
        pass

    # Exit a parse tree produced by TeradataParser#parse.
    def exitParse(self, ctx:TeradataParser.ParseContext):
        pass


    # Enter a parse tree produced by TeradataParser#error.
    def enterError(self, ctx:TeradataParser.ErrorContext):
        pass

    # Exit a parse tree produced by TeradataParser#error.
    def exitError(self, ctx:TeradataParser.ErrorContext):
        pass


    # Enter a parse tree produced by TeradataParser#sql_stmt_list.
    def enterSql_stmt_list(self, ctx:TeradataParser.Sql_stmt_listContext):
        pass

    # Exit a parse tree produced by TeradataParser#sql_stmt_list.
    def exitSql_stmt_list(self, ctx:TeradataParser.Sql_stmt_listContext):
        pass


    # Enter a parse tree produced by TeradataParser#sql_stmt.
    def enterSql_stmt(self, ctx:TeradataParser.Sql_stmtContext):
        pass

    # Exit a parse tree produced by TeradataParser#sql_stmt.
    def exitSql_stmt(self, ctx:TeradataParser.Sql_stmtContext):
        pass


    # Enter a parse tree produced by TeradataParser#select_stmt.
    def enterSelect_stmt(self, ctx:TeradataParser.Select_stmtContext):
        pass

    # Exit a parse tree produced by TeradataParser#select_stmt.
    def exitSelect_stmt(self, ctx:TeradataParser.Select_stmtContext):
        pass


    # Enter a parse tree produced by TeradataParser#select_expr.
    def enterSelect_expr(self, ctx:TeradataParser.Select_exprContext):
        pass

    # Exit a parse tree produced by TeradataParser#select_expr.
    def exitSelect_expr(self, ctx:TeradataParser.Select_exprContext):
        pass


    # Enter a parse tree produced by TeradataParser#insert_stmt.
    def enterInsert_stmt(self, ctx:TeradataParser.Insert_stmtContext):
        pass

    # Exit a parse tree produced by TeradataParser#insert_stmt.
    def exitInsert_stmt(self, ctx:TeradataParser.Insert_stmtContext):
        pass


    # Enter a parse tree produced by TeradataParser#insert_sub_expr.
    def enterInsert_sub_expr(self, ctx:TeradataParser.Insert_sub_exprContext):
        pass

    # Exit a parse tree produced by TeradataParser#insert_sub_expr.
    def exitInsert_sub_expr(self, ctx:TeradataParser.Insert_sub_exprContext):
        pass


    # Enter a parse tree produced by TeradataParser#insert_logging_errors.
    def enterInsert_logging_errors(self, ctx:TeradataParser.Insert_logging_errorsContext):
        pass

    # Exit a parse tree produced by TeradataParser#insert_logging_errors.
    def exitInsert_logging_errors(self, ctx:TeradataParser.Insert_logging_errorsContext):
        pass


    # Enter a parse tree produced by TeradataParser#top_expr.
    def enterTop_expr(self, ctx:TeradataParser.Top_exprContext):
        pass

    # Exit a parse tree produced by TeradataParser#top_expr.
    def exitTop_expr(self, ctx:TeradataParser.Top_exprContext):
        pass


    # Enter a parse tree produced by TeradataParser#having_qualify_expr.
    def enterHaving_qualify_expr(self, ctx:TeradataParser.Having_qualify_exprContext):
        pass

    # Exit a parse tree produced by TeradataParser#having_qualify_expr.
    def exitHaving_qualify_expr(self, ctx:TeradataParser.Having_qualify_exprContext):
        pass


    # Enter a parse tree produced by TeradataParser#select_list.
    def enterSelect_list(self, ctx:TeradataParser.Select_listContext):
        pass

    # Exit a parse tree produced by TeradataParser#select_list.
    def exitSelect_list(self, ctx:TeradataParser.Select_listContext):
        pass


    # Enter a parse tree produced by TeradataParser#select_list_expr.
    def enterSelect_list_expr(self, ctx:TeradataParser.Select_list_exprContext):
        pass

    # Exit a parse tree produced by TeradataParser#select_list_expr.
    def exitSelect_list_expr(self, ctx:TeradataParser.Select_list_exprContext):
        pass


    # Enter a parse tree produced by TeradataParser#from_clause.
    def enterFrom_clause(self, ctx:TeradataParser.From_clauseContext):
        pass

    # Exit a parse tree produced by TeradataParser#from_clause.
    def exitFrom_clause(self, ctx:TeradataParser.From_clauseContext):
        pass


    # Enter a parse tree produced by TeradataParser#from_expr.
    def enterFrom_expr(self, ctx:TeradataParser.From_exprContext):
        pass

    # Exit a parse tree produced by TeradataParser#from_expr.
    def exitFrom_expr(self, ctx:TeradataParser.From_exprContext):
        pass


    # Enter a parse tree produced by TeradataParser#as_of.
    def enterAs_of(self, ctx:TeradataParser.As_ofContext):
        pass

    # Exit a parse tree produced by TeradataParser#as_of.
    def exitAs_of(self, ctx:TeradataParser.As_ofContext):
        pass


    # Enter a parse tree produced by TeradataParser#from_table_expr.
    def enterFrom_table_expr(self, ctx:TeradataParser.From_table_exprContext):
        pass

    # Exit a parse tree produced by TeradataParser#from_table_expr.
    def exitFrom_table_expr(self, ctx:TeradataParser.From_table_exprContext):
        pass


    # Enter a parse tree produced by TeradataParser#from_single_expr.
    def enterFrom_single_expr(self, ctx:TeradataParser.From_single_exprContext):
        pass

    # Exit a parse tree produced by TeradataParser#from_single_expr.
    def exitFrom_single_expr(self, ctx:TeradataParser.From_single_exprContext):
        pass


    # Enter a parse tree produced by TeradataParser#from_join_expr.
    def enterFrom_join_expr(self, ctx:TeradataParser.From_join_exprContext):
        pass

    # Exit a parse tree produced by TeradataParser#from_join_expr.
    def exitFrom_join_expr(self, ctx:TeradataParser.From_join_exprContext):
        pass


    # Enter a parse tree produced by TeradataParser#from_derived_expr.
    def enterFrom_derived_expr(self, ctx:TeradataParser.From_derived_exprContext):
        pass

    # Exit a parse tree produced by TeradataParser#from_derived_expr.
    def exitFrom_derived_expr(self, ctx:TeradataParser.From_derived_exprContext):
        pass


    # Enter a parse tree produced by TeradataParser#from_tablefunc_expr.
    def enterFrom_tablefunc_expr(self, ctx:TeradataParser.From_tablefunc_exprContext):
        pass

    # Exit a parse tree produced by TeradataParser#from_tablefunc_expr.
    def exitFrom_tablefunc_expr(self, ctx:TeradataParser.From_tablefunc_exprContext):
        pass


    # Enter a parse tree produced by TeradataParser#from_with_expr.
    def enterFrom_with_expr(self, ctx:TeradataParser.From_with_exprContext):
        pass

    # Exit a parse tree produced by TeradataParser#from_with_expr.
    def exitFrom_with_expr(self, ctx:TeradataParser.From_with_exprContext):
        pass


    # Enter a parse tree produced by TeradataParser#normalize_expr.
    def enterNormalize_expr(self, ctx:TeradataParser.Normalize_exprContext):
        pass

    # Exit a parse tree produced by TeradataParser#normalize_expr.
    def exitNormalize_expr(self, ctx:TeradataParser.Normalize_exprContext):
        pass


    # Enter a parse tree produced by TeradataParser#where_clause.
    def enterWhere_clause(self, ctx:TeradataParser.Where_clauseContext):
        pass

    # Exit a parse tree produced by TeradataParser#where_clause.
    def exitWhere_clause(self, ctx:TeradataParser.Where_clauseContext):
        pass


    # Enter a parse tree produced by TeradataParser#having_expr.
    def enterHaving_expr(self, ctx:TeradataParser.Having_exprContext):
        pass

    # Exit a parse tree produced by TeradataParser#having_expr.
    def exitHaving_expr(self, ctx:TeradataParser.Having_exprContext):
        pass


    # Enter a parse tree produced by TeradataParser#qualify_expr.
    def enterQualify_expr(self, ctx:TeradataParser.Qualify_exprContext):
        pass

    # Exit a parse tree produced by TeradataParser#qualify_expr.
    def exitQualify_expr(self, ctx:TeradataParser.Qualify_exprContext):
        pass


    # Enter a parse tree produced by TeradataParser#sample_expr.
    def enterSample_expr(self, ctx:TeradataParser.Sample_exprContext):
        pass

    # Exit a parse tree produced by TeradataParser#sample_expr.
    def exitSample_expr(self, ctx:TeradataParser.Sample_exprContext):
        pass


    # Enter a parse tree produced by TeradataParser#expand_expr.
    def enterExpand_expr(self, ctx:TeradataParser.Expand_exprContext):
        pass

    # Exit a parse tree produced by TeradataParser#expand_expr.
    def exitExpand_expr(self, ctx:TeradataParser.Expand_exprContext):
        pass


    # Enter a parse tree produced by TeradataParser#group_by_list.
    def enterGroup_by_list(self, ctx:TeradataParser.Group_by_listContext):
        pass

    # Exit a parse tree produced by TeradataParser#group_by_list.
    def exitGroup_by_list(self, ctx:TeradataParser.Group_by_listContext):
        pass


    # Enter a parse tree produced by TeradataParser#group_by_val.
    def enterGroup_by_val(self, ctx:TeradataParser.Group_by_valContext):
        pass

    # Exit a parse tree produced by TeradataParser#group_by_val.
    def exitGroup_by_val(self, ctx:TeradataParser.Group_by_valContext):
        pass


    # Enter a parse tree produced by TeradataParser#order_by_list.
    def enterOrder_by_list(self, ctx:TeradataParser.Order_by_listContext):
        pass

    # Exit a parse tree produced by TeradataParser#order_by_list.
    def exitOrder_by_list(self, ctx:TeradataParser.Order_by_listContext):
        pass


    # Enter a parse tree produced by TeradataParser#order_by_val.
    def enterOrder_by_val(self, ctx:TeradataParser.Order_by_valContext):
        pass

    # Exit a parse tree produced by TeradataParser#order_by_val.
    def exitOrder_by_val(self, ctx:TeradataParser.Order_by_valContext):
        pass


    # Enter a parse tree produced by TeradataParser#seed_stmt.
    def enterSeed_stmt(self, ctx:TeradataParser.Seed_stmtContext):
        pass

    # Exit a parse tree produced by TeradataParser#seed_stmt.
    def exitSeed_stmt(self, ctx:TeradataParser.Seed_stmtContext):
        pass


    # Enter a parse tree produced by TeradataParser#expr.
    def enterExpr(self, ctx:TeradataParser.ExprContext):
        pass

    # Exit a parse tree produced by TeradataParser#expr.
    def exitExpr(self, ctx:TeradataParser.ExprContext):
        pass


    # Enter a parse tree produced by TeradataParser#expr_list.
    def enterExpr_list(self, ctx:TeradataParser.Expr_listContext):
        pass

    # Exit a parse tree produced by TeradataParser#expr_list.
    def exitExpr_list(self, ctx:TeradataParser.Expr_listContext):
        pass


    # Enter a parse tree produced by TeradataParser#ordinary_grouping_set.
    def enterOrdinary_grouping_set(self, ctx:TeradataParser.Ordinary_grouping_setContext):
        pass

    # Exit a parse tree produced by TeradataParser#ordinary_grouping_set.
    def exitOrdinary_grouping_set(self, ctx:TeradataParser.Ordinary_grouping_setContext):
        pass


    # Enter a parse tree produced by TeradataParser#empty_grouping_set.
    def enterEmpty_grouping_set(self, ctx:TeradataParser.Empty_grouping_setContext):
        pass

    # Exit a parse tree produced by TeradataParser#empty_grouping_set.
    def exitEmpty_grouping_set(self, ctx:TeradataParser.Empty_grouping_setContext):
        pass


    # Enter a parse tree produced by TeradataParser#rollup_list.
    def enterRollup_list(self, ctx:TeradataParser.Rollup_listContext):
        pass

    # Exit a parse tree produced by TeradataParser#rollup_list.
    def exitRollup_list(self, ctx:TeradataParser.Rollup_listContext):
        pass


    # Enter a parse tree produced by TeradataParser#cube_list.
    def enterCube_list(self, ctx:TeradataParser.Cube_listContext):
        pass

    # Exit a parse tree produced by TeradataParser#cube_list.
    def exitCube_list(self, ctx:TeradataParser.Cube_listContext):
        pass


    # Enter a parse tree produced by TeradataParser#grouping_sets_specification.
    def enterGrouping_sets_specification(self, ctx:TeradataParser.Grouping_sets_specificationContext):
        pass

    # Exit a parse tree produced by TeradataParser#grouping_sets_specification.
    def exitGrouping_sets_specification(self, ctx:TeradataParser.Grouping_sets_specificationContext):
        pass


    # Enter a parse tree produced by TeradataParser#column_position.
    def enterColumn_position(self, ctx:TeradataParser.Column_positionContext):
        pass

    # Exit a parse tree produced by TeradataParser#column_position.
    def exitColumn_position(self, ctx:TeradataParser.Column_positionContext):
        pass


    # Enter a parse tree produced by TeradataParser#subquery.
    def enterSubquery(self, ctx:TeradataParser.SubqueryContext):
        pass

    # Exit a parse tree produced by TeradataParser#subquery.
    def exitSubquery(self, ctx:TeradataParser.SubqueryContext):
        pass


    # Enter a parse tree produced by TeradataParser#search_condition.
    def enterSearch_condition(self, ctx:TeradataParser.Search_conditionContext):
        pass

    # Exit a parse tree produced by TeradataParser#search_condition.
    def exitSearch_condition(self, ctx:TeradataParser.Search_conditionContext):
        pass


    # Enter a parse tree produced by TeradataParser#conditional_expr.
    def enterConditional_expr(self, ctx:TeradataParser.Conditional_exprContext):
        pass

    # Exit a parse tree produced by TeradataParser#conditional_expr.
    def exitConditional_expr(self, ctx:TeradataParser.Conditional_exprContext):
        pass


    # Enter a parse tree produced by TeradataParser#column_list.
    def enterColumn_list(self, ctx:TeradataParser.Column_listContext):
        pass

    # Exit a parse tree produced by TeradataParser#column_list.
    def exitColumn_list(self, ctx:TeradataParser.Column_listContext):
        pass


    # Enter a parse tree produced by TeradataParser#signed_number.
    def enterSigned_number(self, ctx:TeradataParser.Signed_numberContext):
        pass

    # Exit a parse tree produced by TeradataParser#signed_number.
    def exitSigned_number(self, ctx:TeradataParser.Signed_numberContext):
        pass


    # Enter a parse tree produced by TeradataParser#literal_value.
    def enterLiteral_value(self, ctx:TeradataParser.Literal_valueContext):
        pass

    # Exit a parse tree produced by TeradataParser#literal_value.
    def exitLiteral_value(self, ctx:TeradataParser.Literal_valueContext):
        pass


    # Enter a parse tree produced by TeradataParser#unary_operator.
    def enterUnary_operator(self, ctx:TeradataParser.Unary_operatorContext):
        pass

    # Exit a parse tree produced by TeradataParser#unary_operator.
    def exitUnary_operator(self, ctx:TeradataParser.Unary_operatorContext):
        pass


    # Enter a parse tree produced by TeradataParser#column_alias.
    def enterColumn_alias(self, ctx:TeradataParser.Column_aliasContext):
        pass

    # Exit a parse tree produced by TeradataParser#column_alias.
    def exitColumn_alias(self, ctx:TeradataParser.Column_aliasContext):
        pass


    # Enter a parse tree produced by TeradataParser#query_name.
    def enterQuery_name(self, ctx:TeradataParser.Query_nameContext):
        pass

    # Exit a parse tree produced by TeradataParser#query_name.
    def exitQuery_name(self, ctx:TeradataParser.Query_nameContext):
        pass


    # Enter a parse tree produced by TeradataParser#expr_alias_name.
    def enterExpr_alias_name(self, ctx:TeradataParser.Expr_alias_nameContext):
        pass

    # Exit a parse tree produced by TeradataParser#expr_alias_name.
    def exitExpr_alias_name(self, ctx:TeradataParser.Expr_alias_nameContext):
        pass


    # Enter a parse tree produced by TeradataParser#joined_table.
    def enterJoined_table(self, ctx:TeradataParser.Joined_tableContext):
        pass

    # Exit a parse tree produced by TeradataParser#joined_table.
    def exitJoined_table(self, ctx:TeradataParser.Joined_tableContext):
        pass


    # Enter a parse tree produced by TeradataParser#single_table_expr.
    def enterSingle_table_expr(self, ctx:TeradataParser.Single_table_exprContext):
        pass

    # Exit a parse tree produced by TeradataParser#single_table_expr.
    def exitSingle_table_expr(self, ctx:TeradataParser.Single_table_exprContext):
        pass


    # Enter a parse tree produced by TeradataParser#derived_table_name.
    def enterDerived_table_name(self, ctx:TeradataParser.Derived_table_nameContext):
        pass

    # Exit a parse tree produced by TeradataParser#derived_table_name.
    def exitDerived_table_name(self, ctx:TeradataParser.Derived_table_nameContext):
        pass


    # Enter a parse tree produced by TeradataParser#date_expr.
    def enterDate_expr(self, ctx:TeradataParser.Date_exprContext):
        pass

    # Exit a parse tree produced by TeradataParser#date_expr.
    def exitDate_expr(self, ctx:TeradataParser.Date_exprContext):
        pass


    # Enter a parse tree produced by TeradataParser#timestamp_expr.
    def enterTimestamp_expr(self, ctx:TeradataParser.Timestamp_exprContext):
        pass

    # Exit a parse tree produced by TeradataParser#timestamp_expr.
    def exitTimestamp_expr(self, ctx:TeradataParser.Timestamp_exprContext):
        pass


    # Enter a parse tree produced by TeradataParser#time_expr.
    def enterTime_expr(self, ctx:TeradataParser.Time_exprContext):
        pass

    # Exit a parse tree produced by TeradataParser#time_expr.
    def exitTime_expr(self, ctx:TeradataParser.Time_exprContext):
        pass


    # Enter a parse tree produced by TeradataParser#date_timestamp_expr.
    def enterDate_timestamp_expr(self, ctx:TeradataParser.Date_timestamp_exprContext):
        pass

    # Exit a parse tree produced by TeradataParser#date_timestamp_expr.
    def exitDate_timestamp_expr(self, ctx:TeradataParser.Date_timestamp_exprContext):
        pass


    # Enter a parse tree produced by TeradataParser#keyword.
    def enterKeyword(self, ctx:TeradataParser.KeywordContext):
        pass

    # Exit a parse tree produced by TeradataParser#keyword.
    def exitKeyword(self, ctx:TeradataParser.KeywordContext):
        pass


    # Enter a parse tree produced by TeradataParser#name.
    def enterName(self, ctx:TeradataParser.NameContext):
        pass

    # Exit a parse tree produced by TeradataParser#name.
    def exitName(self, ctx:TeradataParser.NameContext):
        pass


    # Enter a parse tree produced by TeradataParser#function_name.
    def enterFunction_name(self, ctx:TeradataParser.Function_nameContext):
        pass

    # Exit a parse tree produced by TeradataParser#function_name.
    def exitFunction_name(self, ctx:TeradataParser.Function_nameContext):
        pass


    # Enter a parse tree produced by TeradataParser#database_name.
    def enterDatabase_name(self, ctx:TeradataParser.Database_nameContext):
        pass

    # Exit a parse tree produced by TeradataParser#database_name.
    def exitDatabase_name(self, ctx:TeradataParser.Database_nameContext):
        pass


    # Enter a parse tree produced by TeradataParser#table_name.
    def enterTable_name(self, ctx:TeradataParser.Table_nameContext):
        pass

    # Exit a parse tree produced by TeradataParser#table_name.
    def exitTable_name(self, ctx:TeradataParser.Table_nameContext):
        pass


    # Enter a parse tree produced by TeradataParser#column_name.
    def enterColumn_name(self, ctx:TeradataParser.Column_nameContext):
        pass

    # Exit a parse tree produced by TeradataParser#column_name.
    def exitColumn_name(self, ctx:TeradataParser.Column_nameContext):
        pass


    # Enter a parse tree produced by TeradataParser#correlation_name.
    def enterCorrelation_name(self, ctx:TeradataParser.Correlation_nameContext):
        pass

    # Exit a parse tree produced by TeradataParser#correlation_name.
    def exitCorrelation_name(self, ctx:TeradataParser.Correlation_nameContext):
        pass


    # Enter a parse tree produced by TeradataParser#type_name.
    def enterType_name(self, ctx:TeradataParser.Type_nameContext):
        pass

    # Exit a parse tree produced by TeradataParser#type_name.
    def exitType_name(self, ctx:TeradataParser.Type_nameContext):
        pass


    # Enter a parse tree produced by TeradataParser#types.
    def enterTypes(self, ctx:TeradataParser.TypesContext):
        pass

    # Exit a parse tree produced by TeradataParser#types.
    def exitTypes(self, ctx:TeradataParser.TypesContext):
        pass


    # Enter a parse tree produced by TeradataParser#any_name.
    def enterAny_name(self, ctx:TeradataParser.Any_nameContext):
        pass

    # Exit a parse tree produced by TeradataParser#any_name.
    def exitAny_name(self, ctx:TeradataParser.Any_nameContext):
        pass



del TeradataParser