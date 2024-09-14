import React, {ReactNode} from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import {FaTimes} from 'react-icons/fa';
import {cn} from '@/lib/utils';

interface ModalProps {
    trigger: ReactNode;
    title?: string;
    description?: string;
    children: ReactNode;
}

const Modal: React.FC<ModalProps> = ({
                                         trigger,
                                         title,
                                         description,
                                         children,
                                     }) => (
    <Dialog.Root>
        <Dialog.Trigger asChild>
            {trigger}
        </Dialog.Trigger>
        <Dialog.Portal>
            <Dialog.Overlay
                className={cn(
                    "fixed inset-0 z-50 bg-black/30 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 overflow-y-auto max-h-screen grid place-items-center",
                )}>
                <Dialog.Content
                    className={cn(
                        "z-50 relative grid w-full max-w-lg gap-4 bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 sm:rounded-lg md:w-full",
                    )}
                >
                    {title && (
                        <div className="flex flex-col space-y-1.5 text-center sm:text-left">
                            {title && (
                                <Dialog.Title className="text-lg font-semibold leading-none tracking-tight">
                                    {title}
                                </Dialog.Title>
                            )}
                            {description && (
                                <Dialog.Description className="text-sm text-muted-foreground">
                                    {description}
                                </Dialog.Description>
                            )}
                        </div>
                    )}

                    {children}

                    <Dialog.Close asChild>
                        <button
                            className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100  disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground"
                            aria-label="Close"
                        >
                            <FaTimes size={16}/>
                            <span className="sr-only">Close</span>
                        </button>
                    </Dialog.Close>
                </Dialog.Content>
            </Dialog.Overlay>
        </Dialog.Portal>
    </Dialog.Root>
);

export default Modal;
