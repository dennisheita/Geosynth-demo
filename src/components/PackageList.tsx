
import React from 'react';
import PackageCard from './PackageCard';

interface PackageData {
  id: string;
  orderId: string;
  from: string;
  to: string;
  status: 'ON THE WAY' | 'DELIVERED' | 'PENDING' | 'DELAYED';
  eta: string;
  mineral: string;
  weight: string;
}

interface PackageListProps {
  packages: PackageData[];
  selectedPackage: string | null;
  onPackageSelect: (packageId: string) => void;
}

const PackageList = ({ packages, selectedPackage, onPackageSelect }: PackageListProps) => {
  if (packages.length === 0) {
    return (
      <div className="p-6 text-center">
        <div className="text-white/50 text-sm">No packages found for this mineral</div>
      </div>
    );
  }

  return (
    <div className="space-y-3 p-4">
      {packages.map((pkg) => (
        <PackageCard
          key={pkg.id}
          package={pkg}
          onClick={() => onPackageSelect(pkg.id)}
          isSelected={selectedPackage === pkg.id}
        />
      ))}
    </div>
  );
};

export default PackageList;
