import React, { useState, useEffect } from "react";
import { Pressable, StyleSheet, Text } from "react-native";
import Header from "./Header";
import TodoList from "./TodoList";
import AddTodoModal from "./AddTodoModal";

const styles = StyleSheet.create({
  buttonText: {
    color: "#fff",
    fontWeight: "600",
    padding: 16,
  },
  buttonContainer: {
    alignSelf: "center",
    backgroundColor: "#4696ec",
    borderRadius: 99,
    paddingHorizontal: 8,
  },
  floatingButton: {
    position: "absolute",
    bottom: 44,
    elevation: 6,
    shadowOffset: {
      height: 4,
      width: 1,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
});

const Home = () => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <>
      <Header />
      <TodoList />
      <Pressable
        onPress={() => {
          setModalVisible(true);
        }}
        style={[styles.buttonContainer, styles.floatingButton]}
      >
        <Text style={styles.buttonText}>+ Add Todo</Text>
      </Pressable>
      <AddTodoModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      />
    </>
  );
};

export default Home;
