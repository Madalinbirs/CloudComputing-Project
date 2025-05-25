import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { deleteRecord, getRecords } from "@/utils/recordsFunctions";

const MainPage = () => {
  const router = useRouter();
  const [records, setRecords] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSkill, setSelectedSkill] = useState('');
  const [sortByRating, setSortByRating] = useState(false);

  const fetchRecords = async () => {
    try {
      const response = await getRecords();
      setRecords(response);
    } catch (error) {
      console.error(error);
    }
  };

  const handleDeleteRecord = async (id) => {
    try {
      const response = await deleteRecord(id);
      if (response.deletedCount === 1) {
        const newRecords = records.filter((record) => record._id !== id);
        setRecords(newRecords);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleUpdateRecord = (id) => {
    router.push(`/records/edit?id=${id}`);
  };

  useEffect(() => {
    fetchRecords();
  }, []);

  // 🔍 filtrare + sortare
  let displayedRecords = records
    .filter((record) =>
      record.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      record.role?.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .filter((record) =>
      selectedSkill === ''
        ? true
        : record.skills?.some((skill) =>
            skill.toLowerCase().includes(selectedSkill.toLowerCase())
          )
    );

  if (sortByRating) {
    displayedRecords = displayedRecords.sort((a, b) => (b.rating || 0) - (a.rating || 0));
  }

  return (
    <div className="p-6">
      {/* TITLU */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-gray-800 dark:text-white">IT Talent Board</h1>
        <p className="text-gray-500 mt-2">
          Găsește rapid specialiști IT pentru proiectul tău. Caută, filtrează și recrutează.
        </p>
      </div>

      {/* FILTRE */}
      <div className="flex flex-wrap justify-center gap-4 mb-6">
        <input
          type="text"
          placeholder="Caută după nume sau rol..."
          className="px-4 py-2 border rounded-lg w-72"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <input
          type="text"
          placeholder="Filtrează după skill (ex: React)"
          className="px-4 py-2 border rounded-lg w-72"
          value={selectedSkill}
          onChange={(e) => setSelectedSkill(e.target.value)}
        />

        <button
          onClick={() => setSortByRating(!sortByRating)}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          {sortByRating ? 'Anulează Sortare' : 'Sortează după rating'}
        </button>

        <button
          onClick={() => router.push('/records/create')}
          className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
        >
          + Adaugă Candidat
        </button>
      </div>

      {/* LISTĂ CANDIDAȚI */}
      <div className="flex flex-wrap gap-6 justify-center">
        {displayedRecords.map((record) => (
          <div
            key={record._id}
            className="w-72 p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
          >
            <h5 className="text-xl font-bold text-gray-900 dark:text-white">{record.name}</h5>
            <p className="text-sm text-gray-500 dark:text-gray-300 mb-2">{record.role || 'Fără rol'}</p>

            {record.skills?.length > 0 && (
              <>
                <p className="text-sm font-semibold text-gray-400">Skills:</p>
                <div className="flex flex-wrap gap-2 mt-1 mb-2">
                  {record.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="bg-gray-200 text-gray-800 text-xs px-2 py-1 rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </>
            )}

            {record.rating !== undefined && (
              <p className="text-yellow-500 text-sm mb-4">⭐ {record.rating} / 5</p>
            )}

            <div className="flex justify-between">
              <button
                className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded"
                onClick={() => handleUpdateRecord(record._id)}
              >
                Update
              </button>
              <button
                className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
                onClick={() => handleDeleteRecord(record._id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MainPage;
