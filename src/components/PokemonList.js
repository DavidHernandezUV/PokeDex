import { ActivityIndicator, FlatList, StyleSheet } from "react-native";
import React from "react";
import PokemonCard from "./PokemonCard";

export default function PokemonList(props) {
  const { pokemons, loadPokemons, isNext } = props;

  const loadMore = () => {
    loadPokemons();
  };
  return (
    <FlatList
      data={pokemons} //datos a mostrar
      numColumns={2} //número de colúmnas
      showsVerticalScrollIndicator={false} //ocultar barra de scroll
      keyExtractor={(pokemon) => String(pokemon.id)} //Capturar el id
      renderItem={({ item }) => <PokemonCard pokemon={item} />}
      contentContainerStyle={styles.flatListContentContainer}
      //onEndReached={loadMore()} //ejecutar al llegar al final de la lista (si isNext tiene valor && ejectua loadMore )
      onEndReachedThreshold={0.1} //cargar más, antes de llegar al final
      onMomentumScrollBegin={() => {
        this.onEndReachedCalledDuringMomentum = false;
      }}
      onEndReached={() => {
        if (!this.onEndReachedCalledDuringMomentum) {
          loadMore(); // LOAD MORE DATA
          this.onEndReachedCalledDuringMomentum = true;
        }
      }}
      ListFooterComponent={
        isNext && (
          <ActivityIndicator
            size="large"
            style={styles.spinner}
            color="#AEAEAE"
          />
        )
      }
    />
  );
}

const styles = StyleSheet.create({
  flatListContentContainer: {
    paddingHorizontal: 5,
  },
  spinner: {
    marginTop: 20,
    marginBottom: 60,
  },
});
