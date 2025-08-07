import { StyleSheet, Text, View } from "react-native"
import FastImage from "react-native-fast-image"
import { Configs } from "../../../../utils/configs"
import { CastMember } from "../types/movieCredit"
import { Colors } from "../../../../theme/colors"

type CastCardProps = {
    item: CastMember
}

export const CastCard = ({ item }: CastCardProps) => {
    return (
        <View style={styles.castCard}>
            <FastImage source={{ uri: `${Configs.IMAGE_BASE_URL}${item.profilePath}` }}
                style={styles.castImage}
                resizeMode={FastImage.resizeMode.cover} />
            <Text style={[styles.castName, styles.castText]}>{item.name}</Text>
            <Text style={[styles.castCharacter, styles.castText]}>{item.character}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    castCard: {
        width: 100,
        marginRight: 12,
        backgroundColor: Colors.white,
        borderRadius: 4,
        borderColor: Colors.gray5,
    },
    castImage: {
        width: '100%',
        height: 100,
        marginBottom: 4,
        overflow: 'hidden',
        borderTopLeftRadius: 4,
        borderTopRightRadius: 4,
    },
    castName: {
        fontWeight: 'bold',
    },
    castCharacter: {
        color: Colors.gray5,
    },
    castText: {
        paddingHorizontal: 4,
    }
})