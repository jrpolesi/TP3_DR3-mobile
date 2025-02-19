import { useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { ProductCard } from "./ProductCard.jsx";
import { TextFilter } from "./TextFilter.jsx";

export function ProductsList({ products }) {
  const [filter, setFilter] = useState("");

  const filteredProducts = filter
    ? products.filter((product) =>
        product.name.toLowerCase().includes(filter.toLowerCase())
      )
    : products;

  return (
    <View style={styles.container}>
      <TextFilter filter={filter} onChangeFilter={setFilter} />
      <FlatList
        data={filteredProducts}
        renderItem={({ item }) => <ProductCard key={item.id} {...item} />}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 8,
    flex: 1,
  },
});
