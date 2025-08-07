import { FlatList, StyleSheet } from "react-native"
import { CastCard } from "./CastCard"
import { CastMember } from "../types/movieCredit"
import { useCallback } from "react"

type CastListProps = {
  cast: CastMember[]
}

export const CastCarousel = ({ cast }: CastListProps) => {
    const renderItem = useCallback(({ item }: { item: CastMember }) => (
        <CastCard item={item} />
    ), [])

    return (
        <FlatList
            horizontal
            data={cast}
            renderItem={renderItem}
            keyExtractor={(item) => item.id.toString()}
            showsHorizontalScrollIndicator={false}
            style={styles.castList}
            removeClippedSubviews={true}
        />
    )
}

const styles = StyleSheet.create({
    castList: {
        marginBottom: 16,
    },
})