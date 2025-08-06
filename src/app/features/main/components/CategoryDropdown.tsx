import React, { useState } from 'react'
import { View, Text, TouchableOpacity, Modal, FlatList, StyleSheet } from 'react-native'
import { CATEGORY_OPTION, CategoryOption } from '../types/category-options'

type CategoryDropdownProps = {
  selectedCategory: CategoryOption
  onCategoryChange: (category: CategoryOption) => void
}

const CategoryDropdown = ({ selectedCategory, onCategoryChange }: CategoryDropdownProps) => {
  const [visible, setVisible] = useState(false)

  const handleSelect = (value: CategoryOption) => {
    onCategoryChange(value)
    setVisible(false)
  }

  const selectedLabel = CATEGORY_OPTION.find(opt => opt.value === selectedCategory.value)?.label || ''

  return (
    <View>
      <TouchableOpacity style={styles.dropdown} onPress={() => setVisible(true)}>
        <Text style={styles.dropdownText}>{selectedLabel}</Text>
        <Text style={styles.arrow}>▼</Text>
      </TouchableOpacity>
      <Modal visible={visible} transparent animationType="fade">
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Category</Text>
            <FlatList
              data={CATEGORY_OPTION}
              keyExtractor={item => item.value}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={[
                    styles.option,
                    selectedCategory.value === item.value && styles.selectedOption,
                  ]}
                  onPress={() => handleSelect(item)}
                >
                  <Text style={[
                    styles.optionText,
                    selectedCategory.value === item.value && styles.selectedOptionText,
                  ]}>
                    {item.label}
                  </Text>
                </TouchableOpacity>
              )}
            />
            <TouchableOpacity onPress={() => setVisible(false)} style={styles.closeBtn}>
              <Text style={styles.closeText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  )
}

const styles = StyleSheet.create({
  dropdown: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 12,
    marginVertical: 8,
    elevation: 2,
    justifyContent: 'space-between',
  },
  dropdownText: {
    fontSize: 16,
    color: '#222',
    flex: 1,
  },
  arrow: {
    fontSize: 16,
    color: '#222',
    marginLeft: 8,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.15)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    width: 300,
    elevation: 5,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  option: {
    padding: 12,
    borderRadius: 6,
    backgroundColor: '#f5f5f5',
    marginBottom: 8,
  },
  selectedOption: {
    backgroundColor: '#00bcd4',
  },
  optionText: {
    fontSize: 16,
    color: '#222',
  },
  selectedOptionText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  closeBtn: {
    marginTop: 8,
    alignSelf: 'flex-end',
    padding: 8,
  },
  closeText: {
    color: '#00bcd4',
    fontWeight: 'bold',
  },
})

export default CategoryDropdown