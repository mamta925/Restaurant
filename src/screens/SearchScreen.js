import react, { useState} from "react";
import { View, Text , StyleSheet } from "react-native";
import SearchBar from "../components/SearchBar";
import useResults from "../hooks/useResults";
import ResultList from "../components/ResultList";


const SearchScreen = ()=>{ 
    const [term, setTerm] = useState("");
    const [searchApi, results, errorMessage] = useResults()
    return <View>
        <SearchBar term = {term} 
        onTermChange = {(newTerm)=>setTerm(newTerm)}
        onTermSubmit={()=> searchApi(term)}
        />
        {errorMessage? <Text >{errorMessage}</Text>:null}
        <Text > We have found {results.length} results</Text>
        <ResultList title = "COST Effective"/>
        <ResultList title = "Big Pricier"/>
        <ResultList title = "Big Spender"/>
      </View>
}

const styles = StyleSheet.create({})

export default SearchScreen