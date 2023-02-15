import "react-native-get-random-values";
import "node-libs-react-native/globals.js";
global.Buffer = require("buffer").Buffer;

import "./styles.css";

import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { Button, Text, View } from "react-native";

import { grpc } from "@improbable-eng/grpc-web";
import { NodeHttpTransport } from "@improbable-eng/grpc-web-node-http-transport";
import { MeshServicePromiseClient } from "./src/proto/build/spacemesh/v1/mesh_grpc_web_pb";

grpc.setDefaultTransport(NodeHttpTransport());

export default function App() {
  const [network, setNetwork] = useState("Loading...");
  const [currentLayer, setCurrentLayer] = useState("Loading...");

  const promiseClient = new MeshServicePromiseClient(
    `http://127.0.0.1:8080`,
    null,
    null
  );

  const callGrpcServicePromise = async () => {
    const result = await promiseClient.currentLayer(
      new proto.spacemesh.v1.CurrentLayerRequest(),
      {}
    );
    setCurrentLayer(JSON.stringify(result.toObject()));
  };

  useEffect(() => {
    async function work() {
      const network = await getNetwork();
      setNetwork(network);
    }
    work();
  }, []);

  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-green-700 text-lg font-bold mt-2">
        Hello, world!
      </Text>
      <Text className="text-green-700 text-sm font-bold mt-2">{network}</Text>
      <Button
        title="GRPC Request"
        onPress={() => callGrpcServicePromise()}
      ></Button>
      <Text className="text-green-700 text-sm font-bold mt-2">
        Current layer: {currentLayer}
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}

async function getNetwork() {
  const res = await fetch("https://discover.spacemesh.io/networks.json")
    .then((response) => response.json())
    .then((res: any) => {
      return res[0]["grpcAPI"].slice(0, -1).substring(8);
    });

  return res;
}
