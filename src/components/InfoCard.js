import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const InfoCard = ({ title, status, onPress }) => {
  const isCompleted = status.toLowerCase() === 'selesai';

  return (
    <View style={styles.card}>
      <View style={styles.headerRow}>
        <Text style={styles.title}>{title}</Text>
        <View
          style={[
            styles.badge,
            isCompleted ? styles.badgeSelesai : styles.badgeProses,
          ]}
        >
          <Text
            style={[
              styles.badgeText,
              isCompleted ? styles.textSelesai : styles.textProses,
            ]}
          >
            {status.toUpperCase()}
          </Text>
        </View>
      </View>

      <TouchableOpacity style={styles.button} onPress={onPress} activeOpacity={0.8}>
        <Text style={styles.buttonText}>Lihat Detail</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 3,
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1F2937',
    flex: 1,
    marginRight: 8,
  },
  badge: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 20,
  },
  badgeSelesai: {
    backgroundColor: '#DCFCE7', // Hijau muda
  },
  badgeProses: {
    backgroundColor: '#FFEDD5', // Oranye muda
  },
  badgeText: {
    fontSize: 12,
    fontWeight: '700',
  },
  textSelesai: {
    color: '#16A34A', // Hijau
  },
  textProses: {
    color: '#EA580C', // Oranye
  },
  button: {
    backgroundColor: '#2563EB',
    paddingVertical: 10,
    paddingHorizontal: 14,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '600',
  },
});

export default InfoCard;
