// Generated from C:/GitClone/Storm/StormLang/src/main/antlr4/com/storm/antlr/grammar\Storm.g4 by ANTLR 4.7
// jshint ignore: start
var antlr4 = require('antlr4/index');
var StormListener = require('./StormListener').StormListener;
var grammarFileName = "Storm.g4";

var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0003\u0014\u00f7\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004",
    "\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007",
    "\u0004\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004\f\t\f",
    "\u0004\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010\t\u0010",
    "\u0004\u0011\t\u0011\u0004\u0012\t\u0012\u0004\u0013\t\u0013\u0003\u0002",
    "\u0003\u0002\u0006\u0002)\n\u0002\r\u0002\u000e\u0002*\u0003\u0002\u0003",
    "\u0002\u0003\u0002\u0003\u0003\u0006\u00031\n\u0003\r\u0003\u000e\u0003",
    "2\u0003\u0004\u0007\u00046\n\u0004\f\u0004\u000e\u00049\u000b\u0004",
    "\u0003\u0004\u0003\u0004\u0007\u0004=\n\u0004\f\u0004\u000e\u0004@\u000b",
    "\u0004\u0003\u0004\u0007\u0004C\n\u0004\f\u0004\u000e\u0004F\u000b\u0004",
    "\u0003\u0004\u0005\u0004I\n\u0004\u0003\u0005\u0003\u0005\u0006\u0005",
    "M\n\u0005\r\u0005\u000e\u0005N\u0003\u0005\u0003\u0005\u0005\u0005S",
    "\n\u0005\u0003\u0005\u0007\u0005V\n\u0005\f\u0005\u000e\u0005Y\u000b",
    "\u0005\u0003\u0006\u0003\u0006\u0007\u0006]\n\u0006\f\u0006\u000e\u0006",
    "`\u000b\u0006\u0006\u0006b\n\u0006\r\u0006\u000e\u0006c\u0003\u0006",
    "\u0007\u0006g\n\u0006\f\u0006\u000e\u0006j\u000b\u0006\u0003\u0007\u0003",
    "\u0007\u0006\u0007n\n\u0007\r\u0007\u000e\u0007o\u0003\u0007\u0003\u0007",
    "\u0007\u0007t\n\u0007\f\u0007\u000e\u0007w\u000b\u0007\u0003\b\u0003",
    "\b\u0003\b\u0006\b|\n\b\r\b\u000e\b}\u0003\b\u0005\b\u0081\n\b\u0003",
    "\t\u0006\t\u0084\n\t\r\t\u000e\t\u0085\u0003\n\u0003\n\u0003\n\u0003",
    "\n\u0003\n\u0005\n\u008d\n\n\u0003\n\u0005\n\u0090\n\n\u0003\u000b\u0003",
    "\u000b\u0003\u000b\u0005\u000b\u0095\n\u000b\u0003\u000b\u0007\u000b",
    "\u0098\n\u000b\f\u000b\u000e\u000b\u009b\u000b\u000b\u0003\f\u0003\f",
    "\u0006\f\u009f\n\f\r\f\u000e\f\u00a0\u0003\r\u0003\r\u0003\r\u0006\r",
    "\u00a6\n\r\r\r\u000e\r\u00a7\u0003\r\u0003\r\u0003\r\u0003\u000e\u0003",
    "\u000e\u0006\u000e\u00af\n\u000e\r\u000e\u000e\u000e\u00b0\u0003\u000e",
    "\u0003\u000e\u0003\u000f\u0003\u000f\u0006\u000f\u00b7\n\u000f\r\u000f",
    "\u000e\u000f\u00b8\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0003",
    "\u0010\u0003\u0010\u0006\u0010\u00c1\n\u0010\r\u0010\u000e\u0010\u00c2",
    "\u0003\u0010\u0003\u0010\u0006\u0010\u00c7\n\u0010\r\u0010\u000e\u0010",
    "\u00c8\u0003\u0010\u0003\u0010\u0003\u0011\u0003\u0011\u0003\u0011\u0003",
    "\u0011\u0007\u0011\u00d1\n\u0011\f\u0011\u000e\u0011\u00d4\u000b\u0011",
    "\u0003\u0011\u0005\u0011\u00d7\n\u0011\u0003\u0012\u0003\u0012\u0007",
    "\u0012\u00db\n\u0012\f\u0012\u000e\u0012\u00de\u000b\u0012\u0003\u0012",
    "\u0003\u0012\u0003\u0013\u0007\u0013\u00e3\n\u0013\f\u0013\u000e\u0013",
    "\u00e6\u000b\u0013\u0003\u0013\u0003\u0013\u0003\u0013\u0007\u0013\u00eb",
    "\n\u0013\f\u0013\u000e\u0013\u00ee\u000b\u0013\u0003\u0013\u0003\u0013",
    "\u0007\u0013\u00f2\n\u0013\f\u0013\u000e\u0013\u00f5\u000b\u0013\u0003",
    "\u0013\u00042\u0085\u0002\u0014\u0002\u0004\u0006\b\n\f\u000e\u0010",
    "\u0012\u0014\u0016\u0018\u001a\u001c\u001e \"$\u0002\u0004\u0004\u0002",
    "\u0003\u0004\t\t\u0003\u0002\u0003\u0004\u0002\u0108\u0002&\u0003\u0002",
    "\u0002\u0002\u00040\u0003\u0002\u0002\u0002\u00067\u0003\u0002\u0002",
    "\u0002\bJ\u0003\u0002\u0002\u0002\na\u0003\u0002\u0002\u0002\fk\u0003",
    "\u0002\u0002\u0002\u000ex\u0003\u0002\u0002\u0002\u0010\u0083\u0003",
    "\u0002\u0002\u0002\u0012\u008c\u0003\u0002\u0002\u0002\u0014\u0091\u0003",
    "\u0002\u0002\u0002\u0016\u009c\u0003\u0002\u0002\u0002\u0018\u00a2\u0003",
    "\u0002\u0002\u0002\u001a\u00ac\u0003\u0002\u0002\u0002\u001c\u00b4\u0003",
    "\u0002\u0002\u0002\u001e\u00be\u0003\u0002\u0002\u0002 \u00cc\u0003",
    "\u0002\u0002\u0002\"\u00d8\u0003\u0002\u0002\u0002$\u00e4\u0003\u0002",
    "\u0002\u0002&(\u0005\u0004\u0003\u0002\')\u0007\u0013\u0002\u0002(\'",
    "\u0003\u0002\u0002\u0002)*\u0003\u0002\u0002\u0002*(\u0003\u0002\u0002",
    "\u0002*+\u0003\u0002\u0002\u0002+,\u0003\u0002\u0002\u0002,-\u0005\u0006",
    "\u0004\u0002-.\u0007\u0002\u0002\u0003.\u0003\u0003\u0002\u0002\u0002",
    "/1\u000b\u0002\u0002\u00020/\u0003\u0002\u0002\u000212\u0003\u0002\u0002",
    "\u000223\u0003\u0002\u0002\u000220\u0003\u0002\u0002\u00023\u0005\u0003",
    "\u0002\u0002\u000246\u0005\b\u0005\u000254\u0003\u0002\u0002\u00026",
    "9\u0003\u0002\u0002\u000275\u0003\u0002\u0002\u000278\u0003\u0002\u0002",
    "\u00028:\u0003\u0002\u0002\u000297\u0003\u0002\u0002\u0002:>\u0005\n",
    "\u0006\u0002;=\u0005\u000e\b\u0002<;\u0003\u0002\u0002\u0002=@\u0003",
    "\u0002\u0002\u0002><\u0003\u0002\u0002\u0002>?\u0003\u0002\u0002\u0002",
    "?D\u0003\u0002\u0002\u0002@>\u0003\u0002\u0002\u0002AC\u0005\u0014\u000b",
    "\u0002BA\u0003\u0002\u0002\u0002CF\u0003\u0002\u0002\u0002DB\u0003\u0002",
    "\u0002\u0002DE\u0003\u0002\u0002\u0002EH\u0003\u0002\u0002\u0002FD\u0003",
    "\u0002\u0002\u0002GI\u0005$\u0013\u0002HG\u0003\u0002\u0002\u0002HI",
    "\u0003\u0002\u0002\u0002I\u0007\u0003\u0002\u0002\u0002JL\u0007\u0007",
    "\u0002\u0002KM\u0007\u0014\u0002\u0002LK\u0003\u0002\u0002\u0002MN\u0003",
    "\u0002\u0002\u0002NL\u0003\u0002\u0002\u0002NO\u0003\u0002\u0002\u0002",
    "OR\u0003\u0002\u0002\u0002PS\u0007\u0012\u0002\u0002QS\u0005 \u0011",
    "\u0002RP\u0003\u0002\u0002\u0002RQ\u0003\u0002\u0002\u0002SW\u0003\u0002",
    "\u0002\u0002TV\u0007\u0013\u0002\u0002UT\u0003\u0002\u0002\u0002VY\u0003",
    "\u0002\u0002\u0002WU\u0003\u0002\u0002\u0002WX\u0003\u0002\u0002\u0002",
    "X\t\u0003\u0002\u0002\u0002YW\u0003\u0002\u0002\u0002Z^\u0005\f\u0007",
    "\u0002[]\u0007\u0013\u0002\u0002\\[\u0003\u0002\u0002\u0002]`\u0003",
    "\u0002\u0002\u0002^\\\u0003\u0002\u0002\u0002^_\u0003\u0002\u0002\u0002",
    "_b\u0003\u0002\u0002\u0002`^\u0003\u0002\u0002\u0002aZ\u0003\u0002\u0002",
    "\u0002bc\u0003\u0002\u0002\u0002ca\u0003\u0002\u0002\u0002cd\u0003\u0002",
    "\u0002\u0002dh\u0003\u0002\u0002\u0002eg\u0007\u0013\u0002\u0002fe\u0003",
    "\u0002\u0002\u0002gj\u0003\u0002\u0002\u0002hf\u0003\u0002\u0002\u0002",
    "hi\u0003\u0002\u0002\u0002i\u000b\u0003\u0002\u0002\u0002jh\u0003\u0002",
    "\u0002\u0002km\u0007\u0006\u0002\u0002ln\u0007\u0014\u0002\u0002ml\u0003",
    "\u0002\u0002\u0002no\u0003\u0002\u0002\u0002om\u0003\u0002\u0002\u0002",
    "op\u0003\u0002\u0002\u0002pq\u0003\u0002\u0002\u0002qu\u0007\u0012\u0002",
    "\u0002rt\u0007\u0013\u0002\u0002sr\u0003\u0002\u0002\u0002tw\u0003\u0002",
    "\u0002\u0002us\u0003\u0002\u0002\u0002uv\u0003\u0002\u0002\u0002v\r",
    "\u0003\u0002\u0002\u0002wu\u0003\u0002\u0002\u0002xy\u0005\u0010\t\u0002",
    "y{\u0007\u0013\u0002\u0002z|\u0005\u0012\n\u0002{z\u0003\u0002\u0002",
    "\u0002|}\u0003\u0002\u0002\u0002}{\u0003\u0002\u0002\u0002}~\u0003\u0002",
    "\u0002\u0002~\u0080\u0003\u0002\u0002\u0002\u007f\u0081\u0007\u0013",
    "\u0002\u0002\u0080\u007f\u0003\u0002\u0002\u0002\u0080\u0081\u0003\u0002",
    "\u0002\u0002\u0081\u000f\u0003\u0002\u0002\u0002\u0082\u0084\u000b\u0002",
    "\u0002\u0002\u0083\u0082\u0003\u0002\u0002\u0002\u0084\u0085\u0003\u0002",
    "\u0002\u0002\u0085\u0086\u0003\u0002\u0002\u0002\u0085\u0083\u0003\u0002",
    "\u0002\u0002\u0086\u0011\u0003\u0002\u0002\u0002\u0087\u008d\u0005\u0018",
    "\r\u0002\u0088\u008d\u0005\u001a\u000e\u0002\u0089\u008d\u0005\u001c",
    "\u000f\u0002\u008a\u008d\u0005\u001e\u0010\u0002\u008b\u008d\u0005$",
    "\u0013\u0002\u008c\u0087\u0003\u0002\u0002\u0002\u008c\u0088\u0003\u0002",
    "\u0002\u0002\u008c\u0089\u0003\u0002\u0002\u0002\u008c\u008a\u0003\u0002",
    "\u0002\u0002\u008c\u008b\u0003\u0002\u0002\u0002\u008d\u008f\u0003\u0002",
    "\u0002\u0002\u008e\u0090\u0007\u0013\u0002\u0002\u008f\u008e\u0003\u0002",
    "\u0002\u0002\u008f\u0090\u0003\u0002\u0002\u0002\u0090\u0013\u0003\u0002",
    "\u0002\u0002\u0091\u0092\u0005\u0016\f\u0002\u0092\u0094\u0007\t\u0002",
    "\u0002\u0093\u0095\u0005$\u0013\u0002\u0094\u0093\u0003\u0002\u0002",
    "\u0002\u0094\u0095\u0003\u0002\u0002\u0002\u0095\u0099\u0003\u0002\u0002",
    "\u0002\u0096\u0098\u0007\u0013\u0002\u0002\u0097\u0096\u0003\u0002\u0002",
    "\u0002\u0098\u009b\u0003\u0002\u0002\u0002\u0099\u0097\u0003\u0002\u0002",
    "\u0002\u0099\u009a\u0003\u0002\u0002\u0002\u009a\u0015\u0003\u0002\u0002",
    "\u0002\u009b\u0099\u0003\u0002\u0002\u0002\u009c\u009e\u000b\u0002\u0002",
    "\u0002\u009d\u009f\n\u0002\u0002\u0002\u009e\u009d\u0003\u0002\u0002",
    "\u0002\u009f\u00a0\u0003\u0002\u0002\u0002\u00a0\u009e\u0003\u0002\u0002",
    "\u0002\u00a0\u00a1\u0003\u0002\u0002\u0002\u00a1\u0017\u0003\u0002\u0002",
    "\u0002\u00a2\u00a3\u0007\u0005\u0002\u0002\u00a3\u00a5\u0007\u0012\u0002",
    "\u0002\u00a4\u00a6\u0007\u0014\u0002\u0002\u00a5\u00a4\u0003\u0002\u0002",
    "\u0002\u00a6\u00a7\u0003\u0002\u0002\u0002\u00a7\u00a5\u0003\u0002\u0002",
    "\u0002\u00a7\u00a8\u0003\u0002\u0002\u0002\u00a8\u00a9\u0003\u0002\u0002",
    "\u0002\u00a9\u00aa\u0007\n\u0002\u0002\u00aa\u00ab\u0007\u0013\u0002",
    "\u0002\u00ab\u0019\u0003\u0002\u0002\u0002\u00ac\u00ae\u0007\r\u0002",
    "\u0002\u00ad\u00af\u0007\u0014\u0002\u0002\u00ae\u00ad\u0003\u0002\u0002",
    "\u0002\u00af\u00b0\u0003\u0002\u0002\u0002\u00b0\u00ae\u0003\u0002\u0002",
    "\u0002\u00b0\u00b1\u0003\u0002\u0002\u0002\u00b1\u00b2\u0003\u0002\u0002",
    "\u0002\u00b2\u00b3\u0007\u0012\u0002\u0002\u00b3\u001b\u0003\u0002\u0002",
    "\u0002\u00b4\u00b6\u0007\u000e\u0002\u0002\u00b5\u00b7\u0007\u0014\u0002",
    "\u0002\u00b6\u00b5\u0003\u0002\u0002\u0002\u00b7\u00b8\u0003\u0002\u0002",
    "\u0002\u00b8\u00b6\u0003\u0002\u0002\u0002\u00b8\u00b9\u0003\u0002\u0002",
    "\u0002\u00b9\u00ba\u0003\u0002\u0002\u0002\u00ba\u00bb\u0007\u0012\u0002",
    "\u0002\u00bb\u00bc\u0007\u0010\u0002\u0002\u00bc\u00bd\u0007\u0012\u0002",
    "\u0002\u00bd\u001d\u0003\u0002\u0002\u0002\u00be\u00c0\u0007\u000b\u0002",
    "\u0002\u00bf\u00c1\u0007\u0014\u0002\u0002\u00c0\u00bf\u0003\u0002\u0002",
    "\u0002\u00c1\u00c2\u0003\u0002\u0002\u0002\u00c2\u00c0\u0003\u0002\u0002",
    "\u0002\u00c2\u00c3\u0003\u0002\u0002\u0002\u00c3\u00c4\u0003\u0002\u0002",
    "\u0002\u00c4\u00c6\u0005 \u0011\u0002\u00c5\u00c7\u0007\u0014\u0002",
    "\u0002\u00c6\u00c5\u0003\u0002\u0002\u0002\u00c7\u00c8\u0003\u0002\u0002",
    "\u0002\u00c8\u00c6\u0003\u0002\u0002\u0002\u00c8\u00c9\u0003\u0002\u0002",
    "\u0002\u00c9\u00ca\u0003\u0002\u0002\u0002\u00ca\u00cb\u0007\b\u0002",
    "\u0002\u00cb\u001f\u0003\u0002\u0002\u0002\u00cc\u00cd\u0007\u0012\u0002",
    "\u0002\u00cd\u00ce\u0007\u000f\u0002\u0002\u00ce\u00d6\u0007\u0012\u0002",
    "\u0002\u00cf\u00d1\u0007\u0014\u0002\u0002\u00d0\u00cf\u0003\u0002\u0002",
    "\u0002\u00d1\u00d4\u0003\u0002\u0002\u0002\u00d2\u00d0\u0003\u0002\u0002",
    "\u0002\u00d2\u00d3\u0003\u0002\u0002\u0002\u00d3\u00d5\u0003\u0002\u0002",
    "\u0002\u00d4\u00d2\u0003\u0002\u0002\u0002\u00d5\u00d7\u0005\"\u0012",
    "\u0002\u00d6\u00d2\u0003\u0002\u0002\u0002\u00d6\u00d7\u0003\u0002\u0002",
    "\u0002\u00d7!\u0003\u0002\u0002\u0002\u00d8\u00dc\u0007\u0005\u0002",
    "\u0002\u00d9\u00db\u0007\u0014\u0002\u0002\u00da\u00d9\u0003\u0002\u0002",
    "\u0002\u00db\u00de\u0003\u0002\u0002\u0002\u00dc\u00da\u0003\u0002\u0002",
    "\u0002\u00dc\u00dd\u0003\u0002\u0002\u0002\u00dd\u00df\u0003\u0002\u0002",
    "\u0002\u00de\u00dc\u0003\u0002\u0002\u0002\u00df\u00e0\u0007\u0012\u0002",
    "\u0002\u00e0#\u0003\u0002\u0002\u0002\u00e1\u00e3\u0007\u0014\u0002",
    "\u0002\u00e2\u00e1\u0003\u0002\u0002\u0002\u00e3\u00e6\u0003\u0002\u0002",
    "\u0002\u00e4\u00e2\u0003\u0002\u0002\u0002\u00e4\u00e5\u0003\u0002\u0002",
    "\u0002\u00e5\u00e7\u0003\u0002\u0002\u0002\u00e6\u00e4\u0003\u0002\u0002",
    "\u0002\u00e7\u00e8\u0007\u0003\u0002\u0002\u00e8\u00ec\u000b\u0002\u0002",
    "\u0002\u00e9\u00eb\n\u0003\u0002\u0002\u00ea\u00e9\u0003\u0002\u0002",
    "\u0002\u00eb\u00ee\u0003\u0002\u0002\u0002\u00ec\u00ea\u0003\u0002\u0002",
    "\u0002\u00ec\u00ed\u0003\u0002\u0002\u0002\u00ed\u00ef\u0003\u0002\u0002",
    "\u0002\u00ee\u00ec\u0003\u0002\u0002\u0002\u00ef\u00f3\u0007\u0004\u0002",
    "\u0002\u00f0\u00f2\u0007\u0014\u0002\u0002\u00f1\u00f0\u0003\u0002\u0002",
    "\u0002\u00f2\u00f5\u0003\u0002\u0002\u0002\u00f3\u00f1\u0003\u0002\u0002",
    "\u0002\u00f3\u00f4\u0003\u0002\u0002\u0002\u00f4%\u0003\u0002\u0002",
    "\u0002\u00f5\u00f3\u0003\u0002\u0002\u0002#*27>DHNRW^chou}\u0080\u0085",
    "\u008c\u008f\u0094\u0099\u00a0\u00a7\u00b0\u00b8\u00c2\u00c8\u00d2\u00d6",
    "\u00dc\u00e4\u00ec\u00f3"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, "'{'", "'}'", null, null, null, null, "'=>'", 
                     "'to hit'", "'hit'", "'action'", "'reach'", "'range'", 
                     "'d'", "'/'" ];

var symbolicNames = [ null, null, null, "MODIFIER_OP", "STAT_ID", "STAT", 
                      "DAMAGE_TYPE", "ARROW", "TO_HIT", "HIT", "ACTION", 
                      "REACH", "RANGE", "D", "SLASH", "WORD", "NUMBER", 
                      "NEWLINE", "WS" ];

var ruleNames =  [ "block", "block_name", "traits", "stat", "ability_block", 
                   "ability", "action_block", "action_block_name", "action_component", 
                   "feature_block", "feature_name", "to_hit", "reach", "range", 
                   "hit", "dice", "modifier", "description" ];

function StormParser (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

StormParser.prototype = Object.create(antlr4.Parser.prototype);
StormParser.prototype.constructor = StormParser;

Object.defineProperty(StormParser.prototype, "atn", {
	get : function() {
		return atn;
	}
});

StormParser.EOF = antlr4.Token.EOF;
StormParser.T__0 = 1;
StormParser.T__1 = 2;
StormParser.MODIFIER_OP = 3;
StormParser.STAT_ID = 4;
StormParser.STAT = 5;
StormParser.DAMAGE_TYPE = 6;
StormParser.ARROW = 7;
StormParser.TO_HIT = 8;
StormParser.HIT = 9;
StormParser.ACTION = 10;
StormParser.REACH = 11;
StormParser.RANGE = 12;
StormParser.D = 13;
StormParser.SLASH = 14;
StormParser.WORD = 15;
StormParser.NUMBER = 16;
StormParser.NEWLINE = 17;
StormParser.WS = 18;

StormParser.RULE_block = 0;
StormParser.RULE_block_name = 1;
StormParser.RULE_traits = 2;
StormParser.RULE_stat = 3;
StormParser.RULE_ability_block = 4;
StormParser.RULE_ability = 5;
StormParser.RULE_action_block = 6;
StormParser.RULE_action_block_name = 7;
StormParser.RULE_action_component = 8;
StormParser.RULE_feature_block = 9;
StormParser.RULE_feature_name = 10;
StormParser.RULE_to_hit = 11;
StormParser.RULE_reach = 12;
StormParser.RULE_range = 13;
StormParser.RULE_hit = 14;
StormParser.RULE_dice = 15;
StormParser.RULE_modifier = 16;
StormParser.RULE_description = 17;

function BlockContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = StormParser.RULE_block;
    return this;
}

BlockContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
BlockContext.prototype.constructor = BlockContext;

BlockContext.prototype.block_name = function() {
    return this.getTypedRuleContext(Block_nameContext,0);
};

BlockContext.prototype.traits = function() {
    return this.getTypedRuleContext(TraitsContext,0);
};

BlockContext.prototype.EOF = function() {
    return this.getToken(StormParser.EOF, 0);
};

BlockContext.prototype.NEWLINE = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(StormParser.NEWLINE);
    } else {
        return this.getToken(StormParser.NEWLINE, i);
    }
};


BlockContext.prototype.enterRule = function(listener) {
    if(listener instanceof StormListener ) {
        listener.enterBlock(this);
	}
};

BlockContext.prototype.exitRule = function(listener) {
    if(listener instanceof StormListener ) {
        listener.exitBlock(this);
	}
};




StormParser.BlockContext = BlockContext;

StormParser.prototype.block = function() {

    var localctx = new BlockContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, StormParser.RULE_block);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 36;
        this.block_name();
        this.state = 38; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 37;
            this.match(StormParser.NEWLINE);
            this.state = 40; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while(_la===StormParser.NEWLINE);
        this.state = 42;
        this.traits();
        this.state = 43;
        this.match(StormParser.EOF);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Block_nameContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = StormParser.RULE_block_name;
    return this;
}

Block_nameContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Block_nameContext.prototype.constructor = Block_nameContext;


Block_nameContext.prototype.enterRule = function(listener) {
    if(listener instanceof StormListener ) {
        listener.enterBlock_name(this);
	}
};

Block_nameContext.prototype.exitRule = function(listener) {
    if(listener instanceof StormListener ) {
        listener.exitBlock_name(this);
	}
};




StormParser.Block_nameContext = Block_nameContext;

StormParser.prototype.block_name = function() {

    var localctx = new Block_nameContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, StormParser.RULE_block_name);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 46; 
        this._errHandler.sync(this);
        var _alt = 1+1;
        do {
        	switch (_alt) {
        	case 1+1:
        		this.state = 45;
        		this.matchWildcard();
        		break;
        	default:
        		throw new antlr4.error.NoViableAltException(this);
        	}
        	this.state = 48; 
        	this._errHandler.sync(this);
        	_alt = this._interp.adaptivePredict(this._input,1, this._ctx);
        } while ( _alt!=1 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function TraitsContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = StormParser.RULE_traits;
    return this;
}

TraitsContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
TraitsContext.prototype.constructor = TraitsContext;

TraitsContext.prototype.ability_block = function() {
    return this.getTypedRuleContext(Ability_blockContext,0);
};

TraitsContext.prototype.stat = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(StatContext);
    } else {
        return this.getTypedRuleContext(StatContext,i);
    }
};

TraitsContext.prototype.action_block = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(Action_blockContext);
    } else {
        return this.getTypedRuleContext(Action_blockContext,i);
    }
};

TraitsContext.prototype.feature_block = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(Feature_blockContext);
    } else {
        return this.getTypedRuleContext(Feature_blockContext,i);
    }
};

TraitsContext.prototype.description = function() {
    return this.getTypedRuleContext(DescriptionContext,0);
};

TraitsContext.prototype.enterRule = function(listener) {
    if(listener instanceof StormListener ) {
        listener.enterTraits(this);
	}
};

TraitsContext.prototype.exitRule = function(listener) {
    if(listener instanceof StormListener ) {
        listener.exitTraits(this);
	}
};




StormParser.TraitsContext = TraitsContext;

StormParser.prototype.traits = function() {

    var localctx = new TraitsContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, StormParser.RULE_traits);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 53;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===StormParser.STAT) {
            this.state = 50;
            this.stat();
            this.state = 55;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 56;
        this.ability_block();
        this.state = 60;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,3,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 57;
                this.action_block(); 
            }
            this.state = 62;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,3,this._ctx);
        }

        this.state = 66;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,4,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 63;
                this.feature_block(); 
            }
            this.state = 68;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,4,this._ctx);
        }

        this.state = 70;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===StormParser.T__0 || _la===StormParser.WS) {
            this.state = 69;
            this.description();
        }

    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function StatContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = StormParser.RULE_stat;
    return this;
}

StatContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
StatContext.prototype.constructor = StatContext;

StatContext.prototype.STAT = function() {
    return this.getToken(StormParser.STAT, 0);
};

StatContext.prototype.NUMBER = function() {
    return this.getToken(StormParser.NUMBER, 0);
};

StatContext.prototype.dice = function() {
    return this.getTypedRuleContext(DiceContext,0);
};

StatContext.prototype.WS = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(StormParser.WS);
    } else {
        return this.getToken(StormParser.WS, i);
    }
};


StatContext.prototype.NEWLINE = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(StormParser.NEWLINE);
    } else {
        return this.getToken(StormParser.NEWLINE, i);
    }
};


StatContext.prototype.enterRule = function(listener) {
    if(listener instanceof StormListener ) {
        listener.enterStat(this);
	}
};

StatContext.prototype.exitRule = function(listener) {
    if(listener instanceof StormListener ) {
        listener.exitStat(this);
	}
};




StormParser.StatContext = StatContext;

StormParser.prototype.stat = function() {

    var localctx = new StatContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, StormParser.RULE_stat);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 72;
        this.match(StormParser.STAT);
        this.state = 74; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 73;
            this.match(StormParser.WS);
            this.state = 76; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while(_la===StormParser.WS);
        this.state = 80;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,7,this._ctx);
        switch(la_) {
        case 1:
            this.state = 78;
            this.match(StormParser.NUMBER);
            break;

        case 2:
            this.state = 79;
            this.dice();
            break;

        }
        this.state = 85;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===StormParser.NEWLINE) {
            this.state = 82;
            this.match(StormParser.NEWLINE);
            this.state = 87;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Ability_blockContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = StormParser.RULE_ability_block;
    return this;
}

Ability_blockContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Ability_blockContext.prototype.constructor = Ability_blockContext;

Ability_blockContext.prototype.ability = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(AbilityContext);
    } else {
        return this.getTypedRuleContext(AbilityContext,i);
    }
};

Ability_blockContext.prototype.NEWLINE = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(StormParser.NEWLINE);
    } else {
        return this.getToken(StormParser.NEWLINE, i);
    }
};


Ability_blockContext.prototype.enterRule = function(listener) {
    if(listener instanceof StormListener ) {
        listener.enterAbility_block(this);
	}
};

Ability_blockContext.prototype.exitRule = function(listener) {
    if(listener instanceof StormListener ) {
        listener.exitAbility_block(this);
	}
};




StormParser.Ability_blockContext = Ability_blockContext;

StormParser.prototype.ability_block = function() {

    var localctx = new Ability_blockContext(this, this._ctx, this.state);
    this.enterRule(localctx, 8, StormParser.RULE_ability_block);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 95; 
        this._errHandler.sync(this);
        var _alt = 1;
        do {
        	switch (_alt) {
        	case 1:
        		this.state = 88;
        		this.ability();
        		this.state = 92;
        		this._errHandler.sync(this);
        		var _alt = this._interp.adaptivePredict(this._input,9,this._ctx)
        		while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
        		    if(_alt===1) {
        		        this.state = 89;
        		        this.match(StormParser.NEWLINE); 
        		    }
        		    this.state = 94;
        		    this._errHandler.sync(this);
        		    _alt = this._interp.adaptivePredict(this._input,9,this._ctx);
        		}

        		break;
        	default:
        		throw new antlr4.error.NoViableAltException(this);
        	}
        	this.state = 97; 
        	this._errHandler.sync(this);
        	_alt = this._interp.adaptivePredict(this._input,10, this._ctx);
        } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
        this.state = 102;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,11,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 99;
                this.match(StormParser.NEWLINE); 
            }
            this.state = 104;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,11,this._ctx);
        }

    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function AbilityContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = StormParser.RULE_ability;
    return this;
}

AbilityContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
AbilityContext.prototype.constructor = AbilityContext;

AbilityContext.prototype.STAT_ID = function() {
    return this.getToken(StormParser.STAT_ID, 0);
};

AbilityContext.prototype.NUMBER = function() {
    return this.getToken(StormParser.NUMBER, 0);
};

AbilityContext.prototype.WS = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(StormParser.WS);
    } else {
        return this.getToken(StormParser.WS, i);
    }
};


AbilityContext.prototype.NEWLINE = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(StormParser.NEWLINE);
    } else {
        return this.getToken(StormParser.NEWLINE, i);
    }
};


AbilityContext.prototype.enterRule = function(listener) {
    if(listener instanceof StormListener ) {
        listener.enterAbility(this);
	}
};

AbilityContext.prototype.exitRule = function(listener) {
    if(listener instanceof StormListener ) {
        listener.exitAbility(this);
	}
};




StormParser.AbilityContext = AbilityContext;

StormParser.prototype.ability = function() {

    var localctx = new AbilityContext(this, this._ctx, this.state);
    this.enterRule(localctx, 10, StormParser.RULE_ability);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 105;
        this.match(StormParser.STAT_ID);
        this.state = 107; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 106;
            this.match(StormParser.WS);
            this.state = 109; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while(_la===StormParser.WS);
        this.state = 111;
        this.match(StormParser.NUMBER);
        this.state = 115;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,13,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 112;
                this.match(StormParser.NEWLINE); 
            }
            this.state = 117;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,13,this._ctx);
        }

    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Action_blockContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = StormParser.RULE_action_block;
    return this;
}

Action_blockContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Action_blockContext.prototype.constructor = Action_blockContext;

Action_blockContext.prototype.action_block_name = function() {
    return this.getTypedRuleContext(Action_block_nameContext,0);
};

Action_blockContext.prototype.NEWLINE = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(StormParser.NEWLINE);
    } else {
        return this.getToken(StormParser.NEWLINE, i);
    }
};


Action_blockContext.prototype.action_component = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(Action_componentContext);
    } else {
        return this.getTypedRuleContext(Action_componentContext,i);
    }
};

Action_blockContext.prototype.enterRule = function(listener) {
    if(listener instanceof StormListener ) {
        listener.enterAction_block(this);
	}
};

Action_blockContext.prototype.exitRule = function(listener) {
    if(listener instanceof StormListener ) {
        listener.exitAction_block(this);
	}
};




StormParser.Action_blockContext = Action_blockContext;

StormParser.prototype.action_block = function() {

    var localctx = new Action_blockContext(this, this._ctx, this.state);
    this.enterRule(localctx, 12, StormParser.RULE_action_block);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 118;
        this.action_block_name();
        this.state = 119;
        this.match(StormParser.NEWLINE);
        this.state = 121; 
        this._errHandler.sync(this);
        var _alt = 1;
        do {
        	switch (_alt) {
        	case 1:
        		this.state = 120;
        		this.action_component();
        		break;
        	default:
        		throw new antlr4.error.NoViableAltException(this);
        	}
        	this.state = 123; 
        	this._errHandler.sync(this);
        	_alt = this._interp.adaptivePredict(this._input,14, this._ctx);
        } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
        this.state = 126;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,15,this._ctx);
        if(la_===1) {
            this.state = 125;
            this.match(StormParser.NEWLINE);

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Action_block_nameContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = StormParser.RULE_action_block_name;
    return this;
}

Action_block_nameContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Action_block_nameContext.prototype.constructor = Action_block_nameContext;


Action_block_nameContext.prototype.enterRule = function(listener) {
    if(listener instanceof StormListener ) {
        listener.enterAction_block_name(this);
	}
};

Action_block_nameContext.prototype.exitRule = function(listener) {
    if(listener instanceof StormListener ) {
        listener.exitAction_block_name(this);
	}
};




StormParser.Action_block_nameContext = Action_block_nameContext;

StormParser.prototype.action_block_name = function() {

    var localctx = new Action_block_nameContext(this, this._ctx, this.state);
    this.enterRule(localctx, 14, StormParser.RULE_action_block_name);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 129; 
        this._errHandler.sync(this);
        var _alt = 1+1;
        do {
        	switch (_alt) {
        	case 1+1:
        		this.state = 128;
        		this.matchWildcard();
        		break;
        	default:
        		throw new antlr4.error.NoViableAltException(this);
        	}
        	this.state = 131; 
        	this._errHandler.sync(this);
        	_alt = this._interp.adaptivePredict(this._input,16, this._ctx);
        } while ( _alt!=1 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Action_componentContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = StormParser.RULE_action_component;
    return this;
}

Action_componentContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Action_componentContext.prototype.constructor = Action_componentContext;

Action_componentContext.prototype.to_hit = function() {
    return this.getTypedRuleContext(To_hitContext,0);
};

Action_componentContext.prototype.reach = function() {
    return this.getTypedRuleContext(ReachContext,0);
};

Action_componentContext.prototype.range = function() {
    return this.getTypedRuleContext(RangeContext,0);
};

Action_componentContext.prototype.hit = function() {
    return this.getTypedRuleContext(HitContext,0);
};

Action_componentContext.prototype.description = function() {
    return this.getTypedRuleContext(DescriptionContext,0);
};

Action_componentContext.prototype.NEWLINE = function() {
    return this.getToken(StormParser.NEWLINE, 0);
};

Action_componentContext.prototype.enterRule = function(listener) {
    if(listener instanceof StormListener ) {
        listener.enterAction_component(this);
	}
};

Action_componentContext.prototype.exitRule = function(listener) {
    if(listener instanceof StormListener ) {
        listener.exitAction_component(this);
	}
};




StormParser.Action_componentContext = Action_componentContext;

StormParser.prototype.action_component = function() {

    var localctx = new Action_componentContext(this, this._ctx, this.state);
    this.enterRule(localctx, 16, StormParser.RULE_action_component);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 138;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case StormParser.MODIFIER_OP:
            this.state = 133;
            this.to_hit();
            break;
        case StormParser.REACH:
            this.state = 134;
            this.reach();
            break;
        case StormParser.RANGE:
            this.state = 135;
            this.range();
            break;
        case StormParser.HIT:
            this.state = 136;
            this.hit();
            break;
        case StormParser.T__0:
        case StormParser.WS:
            this.state = 137;
            this.description();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
        this.state = 141;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,18,this._ctx);
        if(la_===1) {
            this.state = 140;
            this.match(StormParser.NEWLINE);

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Feature_blockContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = StormParser.RULE_feature_block;
    return this;
}

Feature_blockContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Feature_blockContext.prototype.constructor = Feature_blockContext;

Feature_blockContext.prototype.feature_name = function() {
    return this.getTypedRuleContext(Feature_nameContext,0);
};

Feature_blockContext.prototype.ARROW = function() {
    return this.getToken(StormParser.ARROW, 0);
};

Feature_blockContext.prototype.description = function() {
    return this.getTypedRuleContext(DescriptionContext,0);
};

Feature_blockContext.prototype.NEWLINE = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(StormParser.NEWLINE);
    } else {
        return this.getToken(StormParser.NEWLINE, i);
    }
};


Feature_blockContext.prototype.enterRule = function(listener) {
    if(listener instanceof StormListener ) {
        listener.enterFeature_block(this);
	}
};

Feature_blockContext.prototype.exitRule = function(listener) {
    if(listener instanceof StormListener ) {
        listener.exitFeature_block(this);
	}
};




StormParser.Feature_blockContext = Feature_blockContext;

StormParser.prototype.feature_block = function() {

    var localctx = new Feature_blockContext(this, this._ctx, this.state);
    this.enterRule(localctx, 18, StormParser.RULE_feature_block);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 143;
        this.feature_name();
        this.state = 144;
        this.match(StormParser.ARROW);
        this.state = 146;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,19,this._ctx);
        if(la_===1) {
            this.state = 145;
            this.description();

        }
        this.state = 151;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,20,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 148;
                this.match(StormParser.NEWLINE); 
            }
            this.state = 153;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,20,this._ctx);
        }

    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Feature_nameContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = StormParser.RULE_feature_name;
    return this;
}

Feature_nameContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Feature_nameContext.prototype.constructor = Feature_nameContext;

Feature_nameContext.prototype.ARROW = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(StormParser.ARROW);
    } else {
        return this.getToken(StormParser.ARROW, i);
    }
};


Feature_nameContext.prototype.enterRule = function(listener) {
    if(listener instanceof StormListener ) {
        listener.enterFeature_name(this);
	}
};

Feature_nameContext.prototype.exitRule = function(listener) {
    if(listener instanceof StormListener ) {
        listener.exitFeature_name(this);
	}
};




StormParser.Feature_nameContext = Feature_nameContext;

StormParser.prototype.feature_name = function() {

    var localctx = new Feature_nameContext(this, this._ctx, this.state);
    this.enterRule(localctx, 20, StormParser.RULE_feature_name);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 154;
        this.matchWildcard();
        this.state = 156; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 155;
            _la = this._input.LA(1);
            if(_la<=0 || (((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << StormParser.T__0) | (1 << StormParser.T__1) | (1 << StormParser.ARROW))) !== 0)) {
            this._errHandler.recoverInline(this);
            }
            else {
            	this._errHandler.reportMatch(this);
                this.consume();
            }
            this.state = 158; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << StormParser.MODIFIER_OP) | (1 << StormParser.STAT_ID) | (1 << StormParser.STAT) | (1 << StormParser.DAMAGE_TYPE) | (1 << StormParser.TO_HIT) | (1 << StormParser.HIT) | (1 << StormParser.ACTION) | (1 << StormParser.REACH) | (1 << StormParser.RANGE) | (1 << StormParser.D) | (1 << StormParser.SLASH) | (1 << StormParser.WORD) | (1 << StormParser.NUMBER) | (1 << StormParser.NEWLINE) | (1 << StormParser.WS))) !== 0));
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function To_hitContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = StormParser.RULE_to_hit;
    return this;
}

To_hitContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
To_hitContext.prototype.constructor = To_hitContext;

To_hitContext.prototype.MODIFIER_OP = function() {
    return this.getToken(StormParser.MODIFIER_OP, 0);
};

To_hitContext.prototype.NUMBER = function() {
    return this.getToken(StormParser.NUMBER, 0);
};

To_hitContext.prototype.TO_HIT = function() {
    return this.getToken(StormParser.TO_HIT, 0);
};

To_hitContext.prototype.NEWLINE = function() {
    return this.getToken(StormParser.NEWLINE, 0);
};

To_hitContext.prototype.WS = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(StormParser.WS);
    } else {
        return this.getToken(StormParser.WS, i);
    }
};


To_hitContext.prototype.enterRule = function(listener) {
    if(listener instanceof StormListener ) {
        listener.enterTo_hit(this);
	}
};

To_hitContext.prototype.exitRule = function(listener) {
    if(listener instanceof StormListener ) {
        listener.exitTo_hit(this);
	}
};




StormParser.To_hitContext = To_hitContext;

StormParser.prototype.to_hit = function() {

    var localctx = new To_hitContext(this, this._ctx, this.state);
    this.enterRule(localctx, 22, StormParser.RULE_to_hit);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 160;
        this.match(StormParser.MODIFIER_OP);
        this.state = 161;
        this.match(StormParser.NUMBER);
        this.state = 163; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 162;
            this.match(StormParser.WS);
            this.state = 165; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while(_la===StormParser.WS);
        this.state = 167;
        this.match(StormParser.TO_HIT);
        this.state = 168;
        this.match(StormParser.NEWLINE);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ReachContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = StormParser.RULE_reach;
    return this;
}

ReachContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ReachContext.prototype.constructor = ReachContext;

ReachContext.prototype.REACH = function() {
    return this.getToken(StormParser.REACH, 0);
};

ReachContext.prototype.NUMBER = function() {
    return this.getToken(StormParser.NUMBER, 0);
};

ReachContext.prototype.WS = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(StormParser.WS);
    } else {
        return this.getToken(StormParser.WS, i);
    }
};


ReachContext.prototype.enterRule = function(listener) {
    if(listener instanceof StormListener ) {
        listener.enterReach(this);
	}
};

ReachContext.prototype.exitRule = function(listener) {
    if(listener instanceof StormListener ) {
        listener.exitReach(this);
	}
};




StormParser.ReachContext = ReachContext;

StormParser.prototype.reach = function() {

    var localctx = new ReachContext(this, this._ctx, this.state);
    this.enterRule(localctx, 24, StormParser.RULE_reach);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 170;
        this.match(StormParser.REACH);
        this.state = 172; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 171;
            this.match(StormParser.WS);
            this.state = 174; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while(_la===StormParser.WS);
        this.state = 176;
        this.match(StormParser.NUMBER);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function RangeContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = StormParser.RULE_range;
    return this;
}

RangeContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
RangeContext.prototype.constructor = RangeContext;

RangeContext.prototype.RANGE = function() {
    return this.getToken(StormParser.RANGE, 0);
};

RangeContext.prototype.NUMBER = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(StormParser.NUMBER);
    } else {
        return this.getToken(StormParser.NUMBER, i);
    }
};


RangeContext.prototype.SLASH = function() {
    return this.getToken(StormParser.SLASH, 0);
};

RangeContext.prototype.WS = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(StormParser.WS);
    } else {
        return this.getToken(StormParser.WS, i);
    }
};


RangeContext.prototype.enterRule = function(listener) {
    if(listener instanceof StormListener ) {
        listener.enterRange(this);
	}
};

RangeContext.prototype.exitRule = function(listener) {
    if(listener instanceof StormListener ) {
        listener.exitRange(this);
	}
};




StormParser.RangeContext = RangeContext;

StormParser.prototype.range = function() {

    var localctx = new RangeContext(this, this._ctx, this.state);
    this.enterRule(localctx, 26, StormParser.RULE_range);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 178;
        this.match(StormParser.RANGE);
        this.state = 180; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 179;
            this.match(StormParser.WS);
            this.state = 182; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while(_la===StormParser.WS);
        this.state = 184;
        this.match(StormParser.NUMBER);
        this.state = 185;
        this.match(StormParser.SLASH);
        this.state = 186;
        this.match(StormParser.NUMBER);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function HitContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = StormParser.RULE_hit;
    return this;
}

HitContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
HitContext.prototype.constructor = HitContext;

HitContext.prototype.HIT = function() {
    return this.getToken(StormParser.HIT, 0);
};

HitContext.prototype.dice = function() {
    return this.getTypedRuleContext(DiceContext,0);
};

HitContext.prototype.DAMAGE_TYPE = function() {
    return this.getToken(StormParser.DAMAGE_TYPE, 0);
};

HitContext.prototype.WS = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(StormParser.WS);
    } else {
        return this.getToken(StormParser.WS, i);
    }
};


HitContext.prototype.enterRule = function(listener) {
    if(listener instanceof StormListener ) {
        listener.enterHit(this);
	}
};

HitContext.prototype.exitRule = function(listener) {
    if(listener instanceof StormListener ) {
        listener.exitHit(this);
	}
};




StormParser.HitContext = HitContext;

StormParser.prototype.hit = function() {

    var localctx = new HitContext(this, this._ctx, this.state);
    this.enterRule(localctx, 28, StormParser.RULE_hit);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 188;
        this.match(StormParser.HIT);
        this.state = 190; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 189;
            this.match(StormParser.WS);
            this.state = 192; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while(_la===StormParser.WS);
        this.state = 194;
        this.dice();
        this.state = 196; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 195;
            this.match(StormParser.WS);
            this.state = 198; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while(_la===StormParser.WS);
        this.state = 200;
        this.match(StormParser.DAMAGE_TYPE);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function DiceContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = StormParser.RULE_dice;
    return this;
}

DiceContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
DiceContext.prototype.constructor = DiceContext;

DiceContext.prototype.NUMBER = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(StormParser.NUMBER);
    } else {
        return this.getToken(StormParser.NUMBER, i);
    }
};


DiceContext.prototype.D = function() {
    return this.getToken(StormParser.D, 0);
};

DiceContext.prototype.modifier = function() {
    return this.getTypedRuleContext(ModifierContext,0);
};

DiceContext.prototype.WS = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(StormParser.WS);
    } else {
        return this.getToken(StormParser.WS, i);
    }
};


DiceContext.prototype.enterRule = function(listener) {
    if(listener instanceof StormListener ) {
        listener.enterDice(this);
	}
};

DiceContext.prototype.exitRule = function(listener) {
    if(listener instanceof StormListener ) {
        listener.exitDice(this);
	}
};




StormParser.DiceContext = DiceContext;

StormParser.prototype.dice = function() {

    var localctx = new DiceContext(this, this._ctx, this.state);
    this.enterRule(localctx, 30, StormParser.RULE_dice);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 202;
        this.match(StormParser.NUMBER);
        this.state = 203;
        this.match(StormParser.D);
        this.state = 204;
        this.match(StormParser.NUMBER);
        this.state = 212;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,28,this._ctx);
        if(la_===1) {
            this.state = 208;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===StormParser.WS) {
                this.state = 205;
                this.match(StormParser.WS);
                this.state = 210;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 211;
            this.modifier();

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ModifierContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = StormParser.RULE_modifier;
    return this;
}

ModifierContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ModifierContext.prototype.constructor = ModifierContext;

ModifierContext.prototype.MODIFIER_OP = function() {
    return this.getToken(StormParser.MODIFIER_OP, 0);
};

ModifierContext.prototype.NUMBER = function() {
    return this.getToken(StormParser.NUMBER, 0);
};

ModifierContext.prototype.WS = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(StormParser.WS);
    } else {
        return this.getToken(StormParser.WS, i);
    }
};


ModifierContext.prototype.enterRule = function(listener) {
    if(listener instanceof StormListener ) {
        listener.enterModifier(this);
	}
};

ModifierContext.prototype.exitRule = function(listener) {
    if(listener instanceof StormListener ) {
        listener.exitModifier(this);
	}
};




StormParser.ModifierContext = ModifierContext;

StormParser.prototype.modifier = function() {

    var localctx = new ModifierContext(this, this._ctx, this.state);
    this.enterRule(localctx, 32, StormParser.RULE_modifier);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 214;
        this.match(StormParser.MODIFIER_OP);
        this.state = 218;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===StormParser.WS) {
            this.state = 215;
            this.match(StormParser.WS);
            this.state = 220;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 221;
        this.match(StormParser.NUMBER);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function DescriptionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = StormParser.RULE_description;
    return this;
}

DescriptionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
DescriptionContext.prototype.constructor = DescriptionContext;

DescriptionContext.prototype.WS = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(StormParser.WS);
    } else {
        return this.getToken(StormParser.WS, i);
    }
};


DescriptionContext.prototype.enterRule = function(listener) {
    if(listener instanceof StormListener ) {
        listener.enterDescription(this);
	}
};

DescriptionContext.prototype.exitRule = function(listener) {
    if(listener instanceof StormListener ) {
        listener.exitDescription(this);
	}
};




StormParser.DescriptionContext = DescriptionContext;

StormParser.prototype.description = function() {

    var localctx = new DescriptionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 34, StormParser.RULE_description);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 226;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===StormParser.WS) {
            this.state = 223;
            this.match(StormParser.WS);
            this.state = 228;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 229;
        this.match(StormParser.T__0);
        this.state = 230;
        this.matchWildcard();
        this.state = 234;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << StormParser.MODIFIER_OP) | (1 << StormParser.STAT_ID) | (1 << StormParser.STAT) | (1 << StormParser.DAMAGE_TYPE) | (1 << StormParser.ARROW) | (1 << StormParser.TO_HIT) | (1 << StormParser.HIT) | (1 << StormParser.ACTION) | (1 << StormParser.REACH) | (1 << StormParser.RANGE) | (1 << StormParser.D) | (1 << StormParser.SLASH) | (1 << StormParser.WORD) | (1 << StormParser.NUMBER) | (1 << StormParser.NEWLINE) | (1 << StormParser.WS))) !== 0)) {
            this.state = 231;
            _la = this._input.LA(1);
            if(_la<=0 || _la===StormParser.T__0 || _la===StormParser.T__1) {
            this._errHandler.recoverInline(this);
            }
            else {
            	this._errHandler.reportMatch(this);
                this.consume();
            }
            this.state = 236;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 237;
        this.match(StormParser.T__1);
        this.state = 241;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,32,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 238;
                this.match(StormParser.WS); 
            }
            this.state = 243;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,32,this._ctx);
        }

    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


exports.StormParser = StormParser;
