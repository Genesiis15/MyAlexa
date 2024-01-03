import { Page, Text, View, Document, StyleSheet, Image } from '@react-pdf/renderer';
import ms1 from '../assets/ms1-removebg-preview.png'




let fechaActual = new Date();
let dia = fechaActual.getDate();
let mes = fechaActual.getMonth() + 1;
let ano = fechaActual.getFullYear();




const styles = StyleSheet.create({
    page: {
        flexDirection: 'column',
        backgroundColor: '#ddd',
        display: 'flex',
    },
    section: {
        margin: 10,
        padding: 10,
        backgroundColor: '#fff',
    },
    sectionTwo: {
        padding: 10,
        backgroundColor: '#fff',
    },
    sectionTitle: {
        margin: 10,
        padding: 10,
        backgroundColor: '#fff',

        color: 'red',
    },
    row: {
        flexDirection: 'row',
    },
    image: {
        width: '100px',
        height: '100px',

    },
    imageLogo: {
        width: '100px',
        height: '100px',

    },
    title: {
        fontSize: 24,
        textAlign: 'right',
        fontWeight: 'bold',
    },
    text: {
        fontSize: 14,
        textAlign: 'justify',
    },
    textTitle: {
        paddingTop: '5%',
        fontSize: 14,
        textAlign: 'center',
        width: '100%'
    },
    textTotal: {

        textAlign: 'right'
    },
});


export const MyDocument = ({ data, result, }) => {

    return (

        <Document>
            <Page size="A4" style={styles.page}>
                <View style={styles.section}>
                    <View style={styles.row}>
                        <Image src={ms1} style={styles.imageLogo} />
                        <View style={styles.sectionTwo}>
                            <Text style={styles.textTitle}>{`${dia}/${mes}/${ano}`}</Text>
                            <Text style={styles.textTitle}>Coorporacion RubSan C.A.</Text>
                        </View>

                    </View>
                </View>
                {data.map((item, index) => (

                    <View key={index} style={styles.section}>

                        <Text style={styles.title}>{item.title} </Text>
                        <Text style={styles.text}>Precio:{item.texto}$</Text>
                        <Text style={styles.text}>Cantidad:{item.valor}</Text>
                        <Image src={item.imagen} source={item.imagen} style={styles.image} />


                    </View>
                ))}
                <View style={styles.section}>
                    <Text style={styles.textTotal}>Total={result()}$</Text>
                </View>
            </Page>

        </Document>

    )
}