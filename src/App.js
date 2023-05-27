import React, { useState } from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import UserCard from "./components/UserCard";
import OtherVotes from "./components/OtherVotes";
import kilicdaroglu_image from "./assets/photos/Kemal_Kılıcdaroglu.jpg";
import erdogan_image from "./assets/photos/Recep_Tayyip_Erdogan_in_Ukraine.jpg";

export default function App() {
  const [voteErdogan, setVoteErdogan] = useState(0);
  const [voteKemal, setVoteKemal] = useState(0);
  const [voteEmpty, setVoteEmpty] = useState(0);
  const [voteInvalid, setVoteInvalid] = useState(0);

  function increaseErdogan() {
    setVoteErdogan(voteErdogan + 1);
  }

  function decreaseErdogan() {
    setVoteErdogan(voteErdogan - 1);
  }

  function increaseKemal() {
    setVoteKemal(voteKemal + 1);
  }
  function decreaseKemal() {
    setVoteKemal(voteKemal - 1);
  }

  function increaseEmpty() {
    setVoteEmpty(voteEmpty + 1);
  }
  function decreaseEmpty() {
    setVoteEmpty(voteEmpty - 1);
  }

  function increaseInvalid() {
    setVoteInvalid(voteInvalid + 1);
  }
  function decreaseInvalid() {
    setVoteInvalid(voteInvalid - 1);
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Oy Sayım App</Text>
      <View style={styles.inner_container}>
        <UserCard
          image={erdogan_image}
          count={voteErdogan}
          increase={increaseErdogan}
          decrease={decreaseErdogan}
        />
        <UserCard
          image={kilicdaroglu_image}
          count={voteKemal}
          increase={increaseKemal}
          decrease={decreaseKemal}
        />
      </View>
      <View style={styles.inner_container}>
        <OtherVotes
          text="Geçersiz Oy"
          count={voteInvalid}
          increase={increaseInvalid}
          decrease={decreaseInvalid}
        />
        <OtherVotes
          text="Boş Oy"
          count={voteEmpty}
          increase={increaseEmpty}
          decrease={decreaseEmpty}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 100,
  },
  header: {
    textAlign: "center",
    backgroundColor: "red",
    fontSize: 25,
    fontStyle: "italic",
    fontWeight: "600",
  },
  inner_container: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
