import React,{useState} from "react"
import { FlatList, ScrollView, Text } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { styles } from "./styles"
import Header from "../../../components/header"
import { categories } from "../../../data/categories"
import CategoryBox from "../../../components/categoryBox"


const Home = () => {
    const [keyword, setKeyword] = useState(false);
    const renderCategoryItem = ({item, index}) => {
        return <CategoryBox title={item?.title} image={item?.image}></CategoryBox>
    }
    return (
        <SafeAreaView>
            <Header
                showSearch
                onSearch={setKeyword}
                keyword={keyword}
                title='Find All You Need'
            />

            <FlatList   
            showsHorizontalScrollIndicator={false}
            style={styles.list}
            horizontal
            data={categories}
            renderItem={renderCategoryItem}
            keyExtractor={(item, index) => String(index)}
            />

            <ScrollView style={styles.container}>
                <Text>Home</Text>
            </ScrollView>
        </SafeAreaView>
    )
}

export default React.memo(Home);