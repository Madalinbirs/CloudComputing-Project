// /pages/records/[id].jsx

import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export default function CandidateProfile() {
  const router = useRouter();
  const { id } = router.query;
  const [record, setRecord] = useState(null);

  useEffect(() => {
    if (!id) return;
    const fetchData = async () => {
      const res = await fetch(`/api/records?id=${id}`);
      const data = await res.json();
      setRecord(data);
    };
    fetchData();
  }, [id]);

  if (!record) {
    return <p className="text-center mt-10 text-gray-600">Se încarcă profilul...</p>;
  }

  return (
    <div className="max-w-3xl mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg dark:bg-gray-800 dark:text-white">
      <button
        onClick={() => router.back()}
        className="mb-4 text-sm text-blue-600 hover:underline"
      >
        ← Înapoi
      </button>

      <h1 className="text-3xl font-bold mb-2">{record.name}</h1>
      <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">{record.role || "Fără rol"}</p>

      {/* Skills */}
      {record.skills?.length > 0 && (
        <>
          <h2 className="text-xl font-semibold mt-4 mb-2">Skills</h2>
          <div className="flex flex-wrap gap-2">
            {record.skills.map((skill, index) => (
              <span
                key={index}
                className="bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </>
      )}

      {/* Rating */}
      {record.rating !== undefined && (
        <div className="mt-4">
          <h2 className="text-xl font-semibold mb-1">Rating</h2>
          <p className="text-yellow-500 text-lg">⭐ {record.rating} / 5</p>
        </div>
      )}

      {/* Descriere / Bio */}
      {record.description && (
        <div className="mt-6">
          <h2 className="text-xl font-semibold mb-2">Despre candidat</h2>
          <p className="text-gray-700 dark:text-gray-300">{record.description}</p>
        </div>
      )}

      {/* (Opțional) Linkuri */}
      <div className="mt-6 flex gap-4">
        {record.github && (
          <a
            href={record.github}
            target="_blank"
            className="text-blue-600 hover:underline"
          >
            GitHub
          </a>
        )}
        {record.linkedin && (
          <a
            href={record.linkedin}
            target="_blank"
            className="text-blue-600 hover:underline"
          >
            LinkedIn
          </a>
        )}
      </div>
    </div>
  );
}
