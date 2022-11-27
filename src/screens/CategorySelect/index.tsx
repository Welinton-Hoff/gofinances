import React from "react";
import { ListRenderItem } from "react-native";

import { Button } from "../../components/Forms/Button";
import { categories, CategoriesSchema } from "../../utils/categories";

import {
  Icon,
  Name,
  Title,
  Header,
  Footer,
  Category,
  Separator,
  Container,
  CategoryList,
} from "./styles";

interface Category {
  key: string;
  name: string;
}

interface CategorySelectProps {
  category: Category;
  closeSelectCategory: () => void;
  setCategory: (category: Category) => void;
}

export function CategorySelect(props: CategorySelectProps) {
  const { category, setCategory, closeSelectCategory } = props;

  function HandleCategorySelect(category: Category) {
    setCategory(category);
  }

  const renderItem: ListRenderItem<CategoriesSchema> = ({ item }) => (
    <Category
      onPress={() => HandleCategorySelect(item)}
      isActive={category.key === item.key}
    >
      <Icon name={item.icon} />
      <Name>{item.name}</Name>
    </Category>
  );

  return (
    <Container>
      <Header>
        <Title>Categoria</Title>
      </Header>

      <CategoryList
        data={categories}
        renderItem={renderItem}
        keyExtractor={(item) => item.key}
        ItemSeparatorComponent={() => <Separator />}
      />

      <Footer>
        <Button onPress={closeSelectCategory} title="Selecionar" />
      </Footer>
    </Container>
  );
}
