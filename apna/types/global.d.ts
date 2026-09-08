declare global {
  // in-memory mock DB for development/demo only
  // eslint-disable-next-line no-var
  var mockUsersDB: { id: string; email: string; passwordHash: string }[] | undefined;
}

export {};
