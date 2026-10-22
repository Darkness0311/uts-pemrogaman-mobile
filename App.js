import React, { useState } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  FlatList,
  StyleSheet,
  Alert,
  StatusBar,
} from 'react-native';
import InfoCard from './components/InfoCard';

// 1. Static Dataset di luar komponen utama (Minimal 5 item)
const DAFTAR_MAHASISWA = [
  { id: '1', nama: 'Alifia Putri', prodi: 'Sistem Informasi' },
  { id: '2', nama: 'Budi Santoso', prodi: 'Teknologi Informasi' },
  { id: '3', nama: 'Citra Dewi', prodi: 'Sistem Informasi' },
  { id: '4', nama: 'Dimas Anggara', prodi: 'Teknik Informatika' },
  { id: '5', nama: 'Eka Nur Safitri', prodi: 'Sistem Informasi' },
];

export default function App() {
  // 2. Search state menggunakan useState hook
  const [keyword, setKeyword] = useState('');

  // 4. Real-time filtering menggunakan .filter() dan .toLowerCase()
  const filteredMahasiswa = DAFTAR_MAHASISWA.filter((item) =>
    item.nama.toLowerCase().includes(keyword.toLowerCase())
  );

  const handlePressCard = (title, status) => {
    Alert.alert('Detail Informasi', `Tugas: ${title}\nStatus: ${status}`);
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#F9FAFB" />

      <FlatList
        data={filteredMahasiswa}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.contentContainer}
        ListHeaderComponent={
          <View>
            {/* BAGIAN SOAL 1: Custom Reusable Component & Dynamic Props */}
            <Text style={styles.sectionTitle}>Soal 1: Info Card</Text>
            <InfoCard
              title="Pengerjaan Proyek UTS React Native"
              status="selesai"
              onPress={() =>
                handlePressCard('Pengerjaan Proyek UTS React Native', 'selesai')
              }
            />
            <InfoCard
              title="Integrasi API & Dokumentasi Laporan"
              status="proses"
              onPress={() =>
                handlePressCard('Integrasi API & Dokumentasi Laporan', 'proses')
              }
            />

            {/* BAGIAN SOAL 2: Real-Time Search Filter */}
            <Text style={[styles.sectionTitle, { marginTop: 16 }]}>
              Soal 2: Direktori Mahasiswa
            </Text>
            {/* 3. Search input bar menggunakan TextInput */}
            <TextInput
              style={styles.searchInput}
              placeholder="Cari nama mahasiswa..."
              placeholderTextColor="#9CA3AF"
              value={keyword}
              onChangeText={(text) => setKeyword(text)}
            />
          </View>
        }
        // 5. Render item daftar mahasiswa
        renderItem={({ item }) => (
          <View style={styles.studentCard}>
            <Text style={styles.studentName}>{item.nama}</Text>
            <Text style={styles.studentProdi}>{item.prodi}</Text>
          </View>
        )}
        // 5. ListEmptyComponent ketika data tidak ditemukan
        ListEmptyComponent={
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyText}>Data tidak ditemukan!</Text>
          </View>
        }
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FAFB',
  },
  contentContainer: {
    padding: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#111827',
    marginBottom: 12,
  },
  searchInput: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#D1D5DB',
    borderRadius: 10,
    paddingHorizontal: 14,
    paddingVertical: 10,
    fontSize: 15,
    color: '#1F2937',
    marginBottom: 14,
  },
  studentCard: {
    backgroundColor: '#FFFFFF',
    padding: 14,
    borderRadius: 10,
    marginBottom: 10,
    borderLeftWidth: 4,
    borderLeftColor: '#2563EB',
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },
  studentName: {
    fontSize: 16,
    fontWeight: '700',
    color: '#1F2937',
    marginBottom: 4,
  },
  studentProdi: {
    fontSize: 14,
    color: '#6B7280',
  },
  emptyContainer: {
    paddingVertical: 32,
    alignItems: 'center',
  },
  emptyText: {
    fontSize: 16,
    color: '#EF4444',
    fontWeight: '600',
  },
});