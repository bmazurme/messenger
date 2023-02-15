/* eslint-disable react/self-closing-comp */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useErrorHandler } from 'react-error-boundary';

import { Button } from '../form-components';
import { AddChatPopup } from '../popups';
import Chats from '../Chats';

import { useCreateChatMutation } from '../../store';
import { Urls } from '../../utils/constants';

export default function Sidebar() {
  const errorHandler = useErrorHandler();
  const [addChat] = useCreateChatMutation();
  const [popup, setPopup] = useState(false);

  const closePopup = () => setPopup(false);
  const handleAddChatSubmit = async (title: Record<string, string>) => {
    try {
      await addChat(title);
      closePopup();
    } catch ({ status, data: { reason } }) {
      errorHandler(new Error(`${status}: ${reason}`));
    }
  };

  return (
    <div className="content__sidebar">
      <div className="sidebar">
        <Link className="sidebar__profile" to={Urls.PROFILE}>
          Profile
          <span className="sidebar__icon" />
        </Link>

        <Button
          className="button button_create-chat"
          variant="filled"
          onClick={() => setPopup(true)}
        >
          Create chat
        </Button>

        <Chats />

        <AddChatPopup
          onAddChat={handleAddChatSubmit}
          onClose={closePopup}
          isOpen={popup}
        />
      </div>
    </div>
  );
}
