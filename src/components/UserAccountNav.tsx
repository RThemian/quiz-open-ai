"use client";
import React from 'react'
import { User } from 'next-auth' // import User type from next-auth
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem } from './ui/dropdown-menu'
import { DropdownMenuSeparator } from '@radix-ui/react-dropdown-menu';
import { signOut } from 'next-auth/react';
import Link from 'next/link';
import {Button} from './ui/button';
import { LogOut } from 'lucide-react';
import UserAvatar from './UserAvatar';

type Props = {
    user: Pick<User, "name" | "email" | "image">;
}

const UserAccountNav = ({user}: Props) => {
  return (
    <DropdownMenu>
        <DropdownMenuTrigger>
            <div className="flex items-center gap-2 p-2 justify-start">
            {/* user avatar */}
            <UserAvatar user = {user}/>
            </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent className='bg-white' align='end'>
           
            <div className="flex items-center gap-2 p-2 justify-start">
                <div className="flex flex-col space-y-1 leading-none">
                    {user.name && <p className="text-sm font-semibold">{user.name}</p>}
                    {user.email && <p className="text-xs text-gray-500">{user.email}</p>}

                </div>
            </div>
        <DropdownMenuSeparator/>
            <DropdownMenuItem asChild>
                <Link href="/">HOME MEOW</Link>
            </DropdownMenuItem>
        <DropdownMenuSeparator/>
            <DropdownMenuItem onClick = {(e) => {
                e.preventDefault();
                signOut().catch(console.error);
            }}
            className='text-red-600 cursor-pointer'
            >
                Sign out
                <LogOut className='w-4 h-4'/>
            </DropdownMenuItem>
        </DropdownMenuContent>
    </DropdownMenu>

  )
}

export default UserAccountNav