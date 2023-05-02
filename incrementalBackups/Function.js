// Incremental Backups

function incrementalBackups(lastBackupTime, changes) {
  let filesToBackup = [];
  for (let i = 0; i < changes.length; i++) {
    if (
      changes[i][0] > lastBackupTime &&
      !filesToBackup.includes(changes[i][1])
    ) {
      filesToBackup.push(changes[i][1]);
    }
  }
  filesToBackup.sort((a, b) => a - b);
  return filesToBackup;
}

console.log(
  incrementalBackups([
    [461620203, 1],
    [461620204, 2],
    [461620205, 6],
    [461620206, 5],
    [461620207, 3],
    [461620207, 5],
    [461620208, 1],
  ])
);
