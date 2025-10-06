'use client';

import React from 'react';
import { FileDown } from 'lucide-react';

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
  DialogFooter,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import ConfirmDownloadIcon from '@/assets/icons/download.png';
import Image from 'next/image';

interface ConfirmDownloadDialogsProps {
  triggerLabel?: string;
  filePath?: string;
  fileName?: string;
}

export const ConfirmDownloadDialogs = ({
  triggerLabel = 'Download CV',
  filePath,
  fileName = 'CV.png',
}: ConfirmDownloadDialogsProps) => {
  const [open, setOpen] = React.useState(false);

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = filePath || '';
    link.download = fileName;
    link.click();
    setOpen(false);
  };
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="cursor-pointer bg-orange-500 text-white hover:bg-orange-600">
          {triggerLabel}{' '}
          <span>
            <FileDown strokeWidth={1.25} size={12} />
          </span>
        </Button>
      </DialogTrigger>

      <DialogContent className="max-w-xs bg-black">
        <DialogHeader className="flex flex-col items-center justify-center gap-4">
          <Image src={ConfirmDownloadIcon} alt="Download Icon" width={68} height={68} />
          <DialogTitle className="text-white">Ready to Download?</DialogTitle>
          <DialogDescription className="text-center text-sm text-gray-400">
            By clicking <span className="text-orange-500">Yes, Download</span>, you`ll get my CV in
            PDF format. <br /> Would you like to continue? <br />
          </DialogDescription>
        </DialogHeader>

        <DialogFooter className="flex w-full gap-4 sm:justify-center">
          <Button variant="outline" onClick={() => setOpen(false)} className="cursor-pointer">
            Cancel
          </Button>
          <Button
            className="cursor-pointer bg-orange-500 text-white hover:bg-orange-600"
            onClick={handleDownload}
          >
            Yes, Download
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
