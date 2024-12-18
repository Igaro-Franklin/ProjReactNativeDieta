import { Text, View, Image, StyleSheet, Pressable } from "react-native";
import { colors } from "../constants/colors";
import { Link } from "expo-router";

export default function Index(){
  return(
    <View style={styles.container}>
      <Image
        source={require('../assets/images/logo.png')}
      />

      <Text style={styles.title}>
        Dieta<Text style={{ color: colors.white }}>.Inteligente</Text>
      </Text>

      <Text style={styles.text}>
        Crie sua dieta com nossa inteligência artificial de forma personalizada!
      </Text>

      <Link href="/step" asChild>
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>Gerar Dieta!</Text>
        </Pressable>
      </Link>

    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    backgroundColor: colors.backgound,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 16,
    paddingRight: 16,
  },

  title:{
    fontSize: 36,
    fontWeight: 'bold',
    color: colors.green
  },

  text:{
    fontSize: 18,
    color: colors.white,
    width: 240,
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 15,
  },

  button:{
    backgroundColor: colors.blue,
    width: '100%',
    height: 40,
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
  },

  buttonText:{
    color: colors.white,
    fontSize: 16,
    fontWeight: 'bold',
  }
})