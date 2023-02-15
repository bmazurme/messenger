import React from 'react';

import Avatar from '../Avatar';
import getUniqueUsers from '../../utils/getUniqueUsers';

export default function UserAddPopup({
  chatUsers, onRemoveUser, onAddUserToChat, result,
}: {
  result: (User & { id: number })[];
  chatUsers: (User & { id: number })[];
  onRemoveUser: (id: number) => void,
  onAddUserToChat: (id: number) => void,
}) {
  return (
    <>
      <h2 className="form__title form__title_users">Users of the chat </h2>
      <ul className="users">
        {
          getUniqueUsers(chatUsers.concat(result)).map((user: User & { id: number }) => (
            <div className="user" key={user.login}>
              <div className="user__avatar">
                <Avatar avatar={user.avatar} />
              </div>
              <span className="user__name">{user.login}</span>
              <button
                type="button"
                aria-label="Menu"
                className={`button header__link${chatUsers.some((u) => u.id === user.id)
                  ? ' header__delete remove_user'
                  : ' add_user'}`}
                onClick={chatUsers.some((u) => u.id === user.id)
                  ? () => onRemoveUser(user.id)
                  : () => onAddUserToChat(user.id)}
              />
            </div>
          ))
        }
      </ul>
    </>
  );
}
