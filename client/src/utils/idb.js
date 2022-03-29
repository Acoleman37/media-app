let db;

const request = indexedDb.open('media', 1);

request.onupgradeneeded = function(e) {
    const db = e.target.result;

    db.createObjectStore('new_content', { autoIncrement: true });
};

request.onsuccess = function(e) {
    db = e.target.result;

    if (navigator.onLine) {
        uploadContent();
    }
};

request.onerror = function(e) {
    console.log(e.target.errorCode);
};

function saveContent(newContent) {
    const content = db.transaction(['new_content'], 'readwrite');
    const contentObjectStore = content.objectStore('new_transaction');

    contentObjectStore.add(newContent);
};

function uploadContent() {
    const content = db.transaction(['new_content'], 'readwrite');
    const contentObjectStore = content.objectStore('new_content');
    const getAll = contentObjectStore.getAll();

    getAll.onsuccess = function () {
        if (getAll.result.length > 0) {
            
        }
    }
}