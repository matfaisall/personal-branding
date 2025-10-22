'use client';
import React, { useCallback, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { LIST_CERTIFICATES } from '@/constant/section/certificates';
import CardComp from '@/components/shared/card';
import CardModal from '@/components/shared/card-modal';
import { containerVariants, headerVariants, subtitleVariants } from './motion.page';
import ContactFooterFixed from './shared/Footer';

const CertificatePage: React.FC = () => {
  const [selectedFeature, setSelectedFeature] = React.useState<number | null>(null);

  const handleOpenFeature = useCallback((id: number) => {
    setSelectedFeature(id);
  }, []);

  const handleCloseModal = useCallback(() => {
    setSelectedFeature(null);
  }, []);

  const selectedFeatureData = useMemo(
    () => LIST_CERTIFICATES.find((f) => f.id === selectedFeature),
    [selectedFeature],
  );

  return (
    <div className="min-h-dvh overflow-hidden dark:bg-black dark:text-white">
      <section className="container-fluid relative mt-32 flex w-full flex-col justify-center px-4 sm:px-6 sm:py-20 md:mt-12">
        {/* Header Section */}
        <motion.div
          className="relative z-10 mb-12 flex flex-col gap-4"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            className="text-3xl font-bold sm:text-4xl lg:text-5xl"
            variants={headerVariants}
          >
            Certificates
          </motion.h1>

          <motion.p
            className="text-base font-medium text-[#8b8b8b] sm:text-lg"
            variants={subtitleVariants}
          >
            A collection of my technical certifications and achievements
          </motion.p>
        </motion.div>

        {/* Grid Section */}
        <motion.div
          className="relative z-10 w-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.5 }}
        >
          <AnimatePresence mode="popLayout">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {LIST_CERTIFICATES.map((list, index) => (
                <React.Fragment key={list.id}>
                  {selectedFeature !== list.id && (
                    <CardComp
                      feature={list}
                      onClick={() => handleOpenFeature(list.id)}
                      showExpandButton={true}
                      index={index}
                    />
                  )}
                </React.Fragment>
              ))}
            </div>
          </AnimatePresence>
        </motion.div>

        {/* Modal */}
        <AnimatePresence mode="wait">
          {selectedFeature && selectedFeatureData && (
            <CardModal feature={selectedFeatureData} onClose={handleCloseModal} />
          )}
        </AnimatePresence>

        <ContactFooterFixed />
      </section>
    </div>
  );
};

export default CertificatePage;
