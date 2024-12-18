import { Text, View, Image, StyleSheet, Pressable, ScrollView } from "react-native";
import { Header } from "@/components/header";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { colors } from "../../constants/colors";
import { Select } from "../../components/input/select";



const schema = z.object({
    gender: z.string().min(1, {message: "Selecione o sexo"}),
    objective: z.string().min(1, {message: "Selecione o objetivo"}),
    level: z.string().min(1, {message: "Selecione o nível"}),
})

type FormData = z.infer<typeof schema>

export default function Create() {

    const { control, handleSubmit, formState: { errors, isValid } } = useForm <FormData>({
        resolver: zodResolver(schema)
    })

    const genderOptions = [
        {label: "Masculino", value: "masculino"},
        {label: "Feminino", value: "feminino"}
    ]

    const levelOptions = [
        { label: 'Sedentário (pouco ou nenhuma atividade física)', value: 'Sedentário' },
        { label: 'Levemente ativo (exercícios 1 a 3 vezes na semana)', value: 'Levemente ativo (exercícios 1 a 3 vezes na semana)' },
        { label: 'Moderadamente ativo (exercícios 3 a 5 vezes na semana)', value: 'Moderadamente ativo (exercícios 3 a 5 vezes na semana)' },
        { label: 'Altamente ativo (exercícios 5 a 7 dia por semana)', value: 'Altamente ativo (exercícios 5 a 7 dia por semana)' },
    ]

    const objectiveOptions = [
        { label: 'Emagrecer', value: 'emagrecer' },
        { label: 'Hipertrofia', value: 'Hipertrofia' },
        { label: 'Hipertrofia + Definição', value: 'Hipertrofia e Definição' },
        { label: 'Definição', value: 'Definição' },
      ]

    return (
        <View style={styles.container}>
            <Header 
                step= "Passo 2"
                title= "Finalizando os dados"
            />

            <ScrollView style={styles.content}>
                <Text style={styles.label}>Sexo:</Text>
                <Select 
                    control={control}
                    name="gender"
                    placeholder="Selecione o seu sexo..."
                    error={errors.gender?.message}
                    options={genderOptions}
                />

                <Text style={styles.label}>Qual seu nível de atividade física:</Text>
                <Select 
                    control={control}
                    name="level"
                    placeholder="Selecione seu nível de atividades..."
                    error={errors.level?.message}
                    options={levelOptions}
                />

                <Text style={styles.label}>Qual seu objetivo:</Text>
                <Select 
                    control={control}
                    name="objective"
                    placeholder="Selecione seu objetivo..."
                    error={errors.objective?.message}
                    options={objectiveOptions}
                />
            </ScrollView>
        </View>
  );
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
})