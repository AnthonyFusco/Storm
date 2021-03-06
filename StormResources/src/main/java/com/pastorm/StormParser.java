package com.pastorm;

import com.storm.antlr.StopErrorListener;
import com.storm.antlr.StormListenerImpl;
import com.storm.antlr.grammar.StormLexer;
import com.storm.model.Block;
import org.antlr.v4.runtime.CharStream;
import org.antlr.v4.runtime.CharStreams;
import org.antlr.v4.runtime.CommonTokenStream;
import org.antlr.v4.runtime.misc.ParseCancellationException;
import org.antlr.v4.runtime.tree.ParseTreeWalker;

import java.util.Optional;

public class StormParser {

    public Optional<Block> parseBlock(String block) {
        if (block == null || block.isEmpty()) {
            return Optional.empty();
        }
        CharStream stream = CharStreams.fromString(block);

        StormLexer lexer = new StormLexer(stream);
        com.storm.antlr.grammar.StormParser parser = new com.storm.antlr.grammar.StormParser(new CommonTokenStream(lexer));
        parser.addErrorListener(new StopErrorListener());
        ParseTreeWalker walker = new ParseTreeWalker();

        try {
            com.storm.antlr.grammar.StormParser.BlockContext rootContext = parser.block();
            StormListenerImpl stormListenerImpl = new StormListenerImpl();
            walker.walk(stormListenerImpl, rootContext);

            return Optional.of(stormListenerImpl.getResult());

        } catch (ParseCancellationException e) {
            return Optional.empty();
        }
    }

    public Optional<ParseCancellationException> checkBlock(String block) {
        CharStream stream = CharStreams.fromString(block);
        StormLexer lexer = new StormLexer(stream);
        com.storm.antlr.grammar.StormParser parser = new com.storm.antlr.grammar.StormParser(new CommonTokenStream(lexer));
        parser.addErrorListener(new StopErrorListener());
        ParseTreeWalker walker = new ParseTreeWalker();
        try {
            com.storm.antlr.grammar.StormParser.BlockContext rootContext = parser.block();
            StormListenerImpl stormListenerImpl = new StormListenerImpl();
            walker.walk(stormListenerImpl, rootContext);
            return Optional.empty();
        } catch (ParseCancellationException e) {
            return Optional.of(e);
        }
    }
}
