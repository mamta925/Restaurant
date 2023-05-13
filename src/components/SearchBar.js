import react from "react";
import { View, Text , StyleSheet } from "react-native";
import { Feather} from "@expo/vector-icons";
import { TextInput } from "react-native-gesture-handler";
const SearchBar = ({term, onTermChange, onTermSubmit})=>{ 
    return <View style = {styles.backgroundStyle}>
        <Feather name="search" style = {styles.iconStyle}/>
        <TextInput 
        autoCapitalize="none"
        autoCorrect={false}
        style = {styles.inputStyle} 
        placeholder="Search"
        value={term}
        onChangeText={onTermChange}
        onEndEditing={onTermSubmit}
        ></TextInput>
        </View>
}

const styles = StyleSheet.create({
    backgroundStyle :{
        marginTop: 15,
        backgroundColor: '#F0EEEE',
        height: 50,
        borderRadius: 5,
        marginHorizontal:15,
        flexDirection: 'row',
    },
    inputStyle: {
        flex:1,
        fontSize: 20
    },
    iconStyle: {
        fontSize: 35,
        alignSelf: 'center',
        marginHorizontal: 15
    }

})

export default SearchBar