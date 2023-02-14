const uniqueUsers = (userList: (User & { id: number })[]) => userList.reduce((o, i) => {
  if (!o.find((v: User & { id: number }) => v.id === i.id)) {
    // @ts-ignore
    o.push(i);
  }
  return o;
}, []);

export default uniqueUsers;
