import { ScrollView } from "react-native";
import CategoryCard from "./CategoryCard";

const Categories = ({ categories }) => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ paddingHorizontal: 15, paddingTop: 10 }}
    >
      {categories?.map((category) => {
        const { title, image } = category.data;

        return <CategoryCard key={category.id} imgUrl={image} title={title} />;
      })}
    </ScrollView>
  );
};

export default Categories;
