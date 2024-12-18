import { Text, View, Image, StyleSheet, Pressable, ScrollView } from "react-native";
import { colors } from "../../constants/colors";
import { Header } from "../../components/header";
import { Input } from "../../components/input"

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { router } from "expo-router";
import { useDataStore } from "../../store/data";


const schema = z.object({
    name: z.string().min(1, {message: "O nome é obrigatório!"}),
    weight: z.string().min(1, {message: "O peso é obrigatório!"}),
    height: z.string().min(1, {message: "A altura é obrigatório!"}),
    age: z.string().min(1, {message: "A idade é obrigatório!"})
})


type FormData = z.infer<typeof schema>


export default function Step(){

    const { control, handleSubmit, formState: { errors, isValid } } = useForm <FormData>({
        resolver: zodResolver(schema)
    })

    const setPageOne = useDataStore(state => state.setPageOne)

    function HandleCreate(data: FormData){
        console.log("Passando dados da pagina 1");
        
        setPageOne({
            name: data.name,
            weight: data.weight,
            height: data.height,
            age: data.age
        })
        
        router.push("/create")
    }

    return(
        <View style={styles.container}>
            <Header step={"Passo 1"} title={"Vamos começar!!!"}/>

            <ScrollView style={styles.content}>
                <Text style={styles.label}>Nome:</Text>
                <Input
                    name="name"
                    control={control}
                    placeholder="Digite seu nome..."
                    error={errors.name?.message}
                    keyboardType="default"
                />

                <Text style={styles.label}>Seu peso atual:</Text>
                <Input
                    name="weight"
                    control={control}
                    placeholder="Ex: 80"
                    error={errors.weight?.message}
                    keyboardType="numeric"
                />

                <Text style={styles.label}>Sua altura atual:</Text>
                <Input
                    name="height"
                    control={control}
                    placeholder="Ex: 170"
                    error={errors.height?.message}
                    keyboardType="numeric"
                />

                <Text style={styles.label}>Sua idade:</Text>
                <Input
                    name="age"
                    control={control}
                    placeholder="Ex: 25"
                    error={errors.age?.message}
                    keyboardType="numeric"
                />

                <Pressable style={styles.button} onPress={handleSubmit(HandleCreate)}>
                    <Text style={styles.buttonText}>Avançar</Text>
                </Pressable>

            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: colors.backgound,
    },

    content:{
        paddingLeft: 16,
        paddingRight: 16,
    },

    label:{
        fontSize: 20,
        color: colors.white,
        fontWeight: 'bold',
        marginBottom: 6,
    },

    button:{
        backgroundColor: colors.blue,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4,
    },

    buttonText:{
        color: colors.white,
        fontSize: 20,
        fontWeight: 'bold'
    }
})