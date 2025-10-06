'use client';

import { useEffect, useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import UnderDevelopment from '@/assets/icons/maintenance.png';
import Image from 'next/image';

export default function UnderDevelopmentModal() {
  const [open, setOpen] = useState(true);

  useEffect(() => {
    // Cek apakah user sudah pernah lihat modal ini
    const hasSeenModal = localStorage.getItem('hasSeenDevModal');

    if (!hasSeenModal) {
      // Delay 500ms agar smooth
      setTimeout(() => {
        setOpen(true);
      }, 500);
    }
  }, []);

  const handleClose = () => {
    setOpen(false);
    // Simpan ke localStorage agar tidak muncul lagi
    localStorage.setItem('hasSeenDevModal', 'true');
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="max-w-md border border-gray-700 bg-black">
        <DialogHeader>
          <div className="mx-auto mb-4 flex items-center justify-center rounded-full">
            <Image
              src={UnderDevelopment}
              alt="Under Development Icon"
              // className="h-8 w-8 text-yellow-600"
              width="80"
              height="90"
            />
          </div>
          <DialogTitle className="text-center text-2xl text-white">
            Website Under Development
          </DialogTitle>
          <DialogDescription className="pt-2 text-center">
            We`re working hard to bring you the best experience. Some features may not be fully
            functional yet.
          </DialogDescription>
        </DialogHeader>

        <div className="flex flex-col gap-3 pt-4">
          <Button onClick={handleClose} className="w-full border-0 focus:ring-0 focus:outline-none">
            I Understand
          </Button>
          <p className="text-center text-xs text-gray-500">Thank you for your patience</p>
        </div>
      </DialogContent>
    </Dialog>
  );
}
