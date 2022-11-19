import React, {useEffect, useContext} from "react";
import { ScrollView } from "react-native";
import { Appbar, Button, Card, Paragraph } from "react-native-paper";
import styled from "styled-components/native";
import {ApiService} from '../../../data/services/ApiService';
import { productsResponse } from "../../../data/actions/ProductAction";
import { ProductContext } from "../../providers/ProductProvider";
import { NumberService } from "../../../data/services/NumberService";

const ViewContainer = styled.SafeAreaView`

    flex: 1;
    /*fundo do celular*/
    background-color: #865439;
  
`;

const Produccard = styled(Card)`

    margin: 7px;

`;

export default function ProductView(props){

    const [{productList, selectedProduct}, productDispath] = useContext(ProductContext)

    useEffect(()=>{
        ApiService.get('viagens').then(productList => productDispath(productsResponse(productList))).catch((error)=>console.log(error, "aquiiiiiiiiiii"))
    })

    return(

        <ViewContainer>
            <Appbar.Header>
                <Appbar.Content title={' ✈ G&M Travel'}/>
            </Appbar.Header>
            <ScrollView>
                {
                    productList.map(item =>(

                    <Produccard key={item.id}>
                        <Card style={{backgroundColor:"#A27B5C"}}>
                            <Card.Cover 
                            source={{uri: item.foto}}
                            />
                            <Card.Title
                            titleStyle={{color:"#402218"}}
                            title={item.nome} 
                            right={(props) => <Button color="#DCD7C9" style={{backgroundColor:"#402218", borderRadius:10, marginRight:10}}>Selecionar</Button>}
                            /> 
                            <Card.Content>
                                <Paragraph style={{color:"#DCD7C9", fontSize:20}}>
                                    {NumberService.currency(item.preco)}
                                </Paragraph>
                            </Card.Content>
                        </Card>
                    </Produccard>

                    ))
                }
            </ScrollView>
        </ViewContainer>

    )

}