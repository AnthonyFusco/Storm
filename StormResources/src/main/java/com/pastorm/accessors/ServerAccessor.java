package com.pastorm.accessors;

import com.pastorm.StormParser;
import com.pastorm.utils.StormProperties;
import com.storm.model.Block;
import com.sun.jersey.api.client.Client;
import com.sun.jersey.api.client.ClientResponse;
import com.sun.jersey.api.client.WebResource;

import java.util.List;
import java.util.Optional;
import java.util.Properties;

public class ServerAccessor implements Accessor {

    private StormParser parser = new StormParser();
    private String host;
    private String port;

    public ServerAccessor(){
        Properties properties = StormProperties.getStormProperties();
        host = properties.getProperty("host", "localhost");
        port = properties.getProperty("port", "5000");
    }

    @Override
    public Optional<Block> getBlockByName(String blockName) {
        Client client = Client.create();
        WebResource resource = client.resource("http://" + host + ":" + port + "/" + "api/block/" + blockName);
        ClientResponse response = resource.get(ClientResponse.class);
        String blockDownloaded = response.getEntity(String.class);
        return parser.parseBlock(blockDownloaded);
    }

    @Override
    public String saveBlock(String blockName, String block) {
        Client client = Client.create();
        WebResource resource = client.resource("http://" + host + ":" + port + "/" + "api/block");
        resource.post(block);
        return "";
    }

    @Override
    public List<String> getBlockList() {
        Client client = Client.create();
        WebResource resource = client.resource("http://" + host + ":" + port + "/" + "api/blocks");
        ClientResponse response = resource.get(ClientResponse.class);
        return response.getEntity(List.class);
    }
}
