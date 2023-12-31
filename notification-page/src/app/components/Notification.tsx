'use client';

import {
  CommentNotification,
  FollowNotification,
  GroupNotification,
  Notification,
  PmNotification,
  ReactNotification,
} from '@/data/data';
import Image from 'next/image';
import React, { FC } from 'react';
import relativeTime from 'dayjs/plugin/relativeTime';
import dayjs from 'dayjs';
dayjs.extend(relativeTime);

const UnreadMark = ({ unread }: { unread: boolean }) => {
  return (
    <span
      className={`${
        unread ? 'inline-block' : 'hidden'
      } mx-2 w-2 h-2 bg-c-red rounded-full`}
    ></span>
  );
};

const Username = ({ name }: { name: string }) => {
  return <span className='font-bold'> {name}</span>;
};

const GroupName = ({ name }: { name: string }) => {
  return <span className='font-bold text-c-blue'> {name}</span>;
};

const PostName = ({ postName }: { postName: string }) => {
  return <span className='font-medium text-very-dark-blue'>{postName}</span>;
};

const TimeFromNow = ({ notificationAt }: { notificationAt: Date }) => {
  return <p className='text-grayish-blue'>{dayjs(notificationAt).fromNow()}</p>;
};

interface NotificationProps {
  id: number;
  notification: Notification;
  markAsRead: () => void;
}

const Notification: FC<NotificationProps> = ({
  id,
  notification,
  markAsRead,
}) => {
  const renderNotificationContent = () => {
    switch (notification.type) {
      case 'react': {
        const data = notification as ReactNotification;
        return (
          <div>
            <Username name={data.person.name} /> react to your recent post{' '}
            <PostName postName={data.postName} />
            <UnreadMark unread={data.unread} />
            <TimeFromNow notificationAt={data.notificationAt} />
          </div>
        );
      }
      case 'comment': {
        const data = notification as CommentNotification;
        return (
          <div className='w-full flex flex-row justify-between space-x-3'>
            <div>
              <Username name={data.person.name} /> send you a private message
              <UnreadMark unread={data.unread} />
              <TimeFromNow notificationAt={data.notificationAt} />
            </div>
            {data.image && (
              <Image
                alt='post-picture'
                src={data.image}
                width={44}
                height={44}
                className='object-contain object-top'
              />
            )}
          </div>
        );
      }
      case 'follow': {
        const data = notification as FollowNotification;
        return (
          <div>
            <Username name={data.person.name} /> followed you
            <UnreadMark unread={data.unread} />
            <TimeFromNow notificationAt={data.notificationAt} />
          </div>
        );
      }
      case 'group': {
        const data = notification as GroupNotification;
        return (
          <div className='flex flex-col'>
            <div>
              <Username name={data.person.name} />{' '}
              {data.status === 'join'
                ? 'has joined'
                : data.status === 'leave'
                ? 'left'
                : ''}{' '}
              the group <GroupName name={data.groupName} />
              <UnreadMark unread={data.unread} />
            </div>
            <TimeFromNow notificationAt={data.notificationAt} />
          </div>
        );
      }
      case 'pm': {
        const data = notification as PmNotification;
        return (
          <div>
            <Username name={data.person.name} /> send you a private message
            <UnreadMark unread={data.unread} />
            <TimeFromNow notificationAt={data.notificationAt} />
            <div className='mt-2 p-4 text-[15px] rounded-sm md:rounded-md border border-grayish-blue/50 leading-[18px]'>
              <p className=''>{data.message}</p>
            </div>
          </div>
        );
      }
    }
  };
  return (
    <div
      className={`p-4 flex space-x-4 rounded-lg text-dark-grayish-blue hover:cursor-pointer hover:bg-light-grayish-blue-1 ${
        notification.unread === true ? 'bg-light-grayish-blue-1/30' : 'bg-white'
      }`}
      onClick={markAsRead}
    >
      <Image
        alt='avatar'
        src={notification.person.avatar}
        width={44}
        height={44}
        className='object-contain object-top'
      />
      {renderNotificationContent()}
    </div>
  );
};

export default Notification;
