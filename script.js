document.addEventListener('DOMContentLoaded', () => {
    const exportBtn = document.getElementById('exportBtn');
    const importBtn = document.getElementById('importBtn');
    const importFile = document.getElementById('importFile');

    // Export Logic
    exportBtn.addEventListener('click', () => {
        const backupData = {
            app: "Shohoz-Nihongo",
            version: 2,
            exportedAt: new Date().toISOString(),
            data: {
                n5: {
                    vocabulary: JSON.parse(localStorage.getItem('n5_vocabulary_progress') || '{}'),
                    kanji: JSON.parse(localStorage.getItem('n5_kanji_progress') || '{}'),
                },
                n4: {
                    vocabulary: JSON.parse(localStorage.getItem('n4_vocabulary_progress') || '{}'),
                    kanji: JSON.parse(localStorage.getItem('n4_kanji_progress') || '{}'),
                }
            }
        };

        const jsonString = JSON.stringify(backupData, null, 2);
        const blob = new Blob([jsonString], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        
        const dateStr = new Date().toISOString().split('T')[0];
        const a = document.createElement('a');
        a.href = url;
        a.download = `shohoz-nihongo-backup-${dateStr}.json`;
        document.body.appendChild(a);
        a.click();
        
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    });

    // Import Logic
    importBtn.addEventListener('click', () => {
        importFile.click();
    });

    importFile.addEventListener('change', (event) => {
        const file = event.target.files[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onload = (e) => {
            try {
                const parsedData = JSON.parse(e.target.result);
                
                if (parsedData.app !== "Shohoz-Nihongo" && parsedData.app !== "N5-Flashcards") {
                    alert("Invalid backup file. Please select a valid Shohoz Nihongo backup.");
                    return;
                }

                const confirmImport = confirm("Importing this backup will replace your current saved progress. Continue?");
                if (confirmImport) {
                    if (parsedData.app === "N5-Flashcards") {
                        if (parsedData.data.vocabulary) localStorage.setItem('n5_vocabulary_progress', JSON.stringify(parsedData.data.vocabulary));
                        if (parsedData.data.kanji) localStorage.setItem('n5_kanji_progress', JSON.stringify(parsedData.data.kanji));
                    } else {
                        if (parsedData.data.n5) {
                            localStorage.setItem('n5_vocabulary_progress', JSON.stringify(parsedData.data.n5.vocabulary));
                            localStorage.setItem('n5_kanji_progress', JSON.stringify(parsedData.data.n5.kanji));
                        }
                        if (parsedData.data.n4) {
                            localStorage.setItem('n4_vocabulary_progress', JSON.stringify(parsedData.data.n4.vocabulary));
                            localStorage.setItem('n4_kanji_progress', JSON.stringify(parsedData.data.n4.kanji));
                        }
                    }
                    
                    alert("Data imported successfully!");
                }
            } catch (error) {
                alert("Error reading backup file. The file might be corrupted.");
                console.error(error);
            }
        };
        reader.readAsText(file);
        
        event.target.value = ''; // Reset file input
    });
});
