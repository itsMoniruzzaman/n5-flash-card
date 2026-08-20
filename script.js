document.addEventListener('DOMContentLoaded', () => {
    const exportBtn = document.getElementById('exportBtn');
    const importBtn = document.getElementById('importBtn');
    const importFile = document.getElementById('importFile');

    // Export Logic
    exportBtn.addEventListener('click', () => {
        const backupData = {
            app: "N5-Flashcards",
            version: 1,
            exportedAt: new Date().toISOString(),
            data: {
                vocabulary: JSON.parse(localStorage.getItem('n5_vocabulary_progress') || '{}'),
                kanji: JSON.parse(localStorage.getItem('n5_kanji_progress') || '{}'),
                grammar: JSON.parse(localStorage.getItem('n5_grammar_progress') || '{}'),
                other: JSON.parse(localStorage.getItem('n5_other_progress') || '{}')
            }
        };

        const jsonString = JSON.stringify(backupData, null, 2);
        const blob = new Blob([jsonString], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        
        const dateStr = new Date().toISOString().split('T')[0];
        const a = document.createElement('a');
        a.href = url;
        a.download = `n5-flashcards-backup-${dateStr}.json`;
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
                
                // Validate it's our backup file
                if (parsedData.app !== "N5-Flashcards") {
                    alert("Invalid backup file. Please select a valid N5 Flashcards JSON backup.");
                    return;
                }

                const confirmImport = confirm("Importing this backup will replace your current saved progress. Continue?");
                if (confirmImport) {
                    if (parsedData.data.vocabulary) localStorage.setItem('n5_vocabulary_progress', JSON.stringify(parsedData.data.vocabulary));
                    if (parsedData.data.kanji) localStorage.setItem('n5_kanji_progress', JSON.stringify(parsedData.data.kanji));
                    if (parsedData.data.grammar) localStorage.setItem('n5_grammar_progress', JSON.stringify(parsedData.data.grammar));
                    if (parsedData.data.other) localStorage.setItem('n5_other_progress', JSON.stringify(parsedData.data.other));
                    
                    alert("Data imported successfully!");
                }
            } catch (error) {
                alert("Error reading backup file. The file might be corrupted.");
                console.error(error);
            }
        };
        reader.readAsText(file);
        
        // Reset file input so the same file can be selected again if needed
        event.target.value = '';
    });
});