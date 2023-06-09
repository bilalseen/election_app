import React, { useState } from "react";
import { StyleSheet, Text, View, SafeAreaView, Alert } from "react-native";
import UserCard from "./components/UserCard";
import OtherVotes from "./components/OtherVotes";
import DeleteBox from "./components/DeleteBox";

import kilicdaroglu_image from "./assets/photos/Kemal_Kılıcdaroglu.jpg";
import erdogan_image from "./assets/photos/Recep_Tayyip_Erdogan_in_Ukraine.jpg";

export default function App() {
  const [voteErdogan, setVoteErdogan] = useState(0);
  const [voteKemal, setVoteKemal] = useState(0);
  const [voteEmpty, setVoteEmpty] = useState(0);
  const [voteInvalid, setVoteInvalid] = useState(0);
  const [totalVote, setTotalVote] = useState(0);

  function increaseErdogan() {
    setVoteErdogan(voteErdogan + 1);
    setTotalVote(totalVote + 1);
  }

  function decreaseErdogan() {
    if (voteErdogan > 0) {
      setVoteErdogan(voteErdogan - 1);
      setTotalVote(totalVote - 1);
    } else Alert.alert("Negatif oy olamaz!!!", "Oy sayımına dikkat ediniz.");
  }

  function increaseKemal() {
    setVoteKemal(voteKemal + 1);
    setTotalVote(totalVote + 1);
  }
  function decreaseKemal() {
    if (voteKemal > 0) {
      setVoteKemal(voteKemal - 1);
      setTotalVote(totalVote - 1);
    } else Alert.alert("Negatif oy olamaz!!!", "Oy sayımına dikkat ediniz.");
  }

  function increaseEmpty() {
    setVoteEmpty(voteEmpty + 1);
    setTotalVote(totalVote + 1);
  }
  function decreaseEmpty() {
    if (voteEmpty > 0) {
      setVoteEmpty(voteEmpty - 1);
      setTotalVote(totalVote - 1);
    } else Alert.alert("Negatif oy olamaz!!!", "Oy sayımına dikkat ediniz.");
  }

  function increaseInvalid() {
    setVoteInvalid(voteInvalid + 1);
    setTotalVote(totalVote + 1);
  }
  function decreaseInvalid() {
    if (voteInvalid > 0) {
      setVoteInvalid(voteInvalid - 1);
      setTotalVote(totalVote - 1);
    } else Alert.alert("Negatif oy olamaz!!!", "Oy sayımına dikkat ediniz.");
  }

  const clearVotes = () => {
    if (totalVote > 0) {
      Alert.alert("Oylar siliniyor!!!", "Oylarınız silinecek emin misiniz?", [
        {
          text: "Hayır",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel",
        },
        {
          text: "Evet",
          onPress: () => {
            setVoteErdogan(0);
            setVoteKemal(0);
            setVoteInvalid(0);
            setVoteEmpty(0);
            setTotalVote(0);
          },
        },
      ]);
    }else Alert.alert("Oy sayımı başlamadı", "Oy sayımı başlamadan oyları silemezsiniz")
  };

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
      <Text>Toplam oy: {totalVote}</Text>
      <DeleteBox onPress={clearVotes} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 70,
    alignItems: "center",
    backgroundColor: "#E8F9FD",
  },
  header: {
    textAlign: "center",
    fontSize: 25,
    fontStyle: "italic",
    fontWeight: "600",
  },
  inner_container: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
