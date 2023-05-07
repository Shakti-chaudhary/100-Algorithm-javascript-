// Incremental Backups

function incrementalBackups(lastBackupTime, changes) {
  const filesToBackup = new Set();
  for (const [timestamp, fileId] of changes) {
    if (timestamp > lastBackupTime) {
      filesToBackup.add(fileId);
    }
  }
  return Array.from(filesToBackup).sort((a, b) => a - b);
}

console.log(
  incrementalBackups(461620205, [
    [461620203, 1],
    [461620204, 2],
    [461620205, 6],
    [461620206, 5],
    [461620207, 3],
    [461620207, 5],
    [461620208, 1],
  ])
);
