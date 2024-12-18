import React from 'react';
import { Ruler, Target } from 'lucide-react';

const VisceralFatAssessment = () => {
  return (
    <section className="bg-white rounded-lg shadow-lg p-8 mb-8">
      <div className="flex items-center gap-3 mb-6">
        <Ruler className="h-8 w-8 text-rose-600" />
        <h2 className="text-2xl font-bold text-gray-900">Assessing Visceral Fat Levels</h2>
      </div>

      <div className="space-y-8">
        <div className="prose max-w-none text-gray-700">
          <p className="lead text-lg">
            Visceral fat is the fat that surrounds your vital organs in the abdominal cavity. Unlike subcutaneous fat that you can pinch, visceral fat lies deep within your core and can be harder to detect.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4 text-gray-900">Measurement Methods</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-medium text-gray-800 mb-2">Waist Circumference</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• Measure at belly button level</li>
                  <li>• Keep tape measure parallel to floor</li>
                  <li>• Measure after exhaling normally</li>
                  <li>• Don't pull tape too tight</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-gray-800 mb-2">Advanced Methods</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• CT or MRI scans (most accurate)</li>
                  <li>• Bioelectrical impedance</li>
                  <li>• DEXA scans</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4 text-gray-900">Healthy Standards</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-medium text-gray-800 mb-2">Waist Circumference Thresholds</h4>
                <div className="space-y-3">
                  <div>
                    <p className="font-medium text-rose-600">Men:</p>
                    <ul className="text-gray-700">
                      <li>• Low Risk: Less than 94cm (37 inches)</li>
                      <li>• Moderate Risk: 94-102cm (37-40 inches)</li>
                      <li>• High Risk: More than 102cm (40 inches)</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-medium text-rose-600">Women:</p>
                    <ul className="text-gray-700">
                      <li>• Low Risk: Less than 80cm (31.5 inches)</li>
                      <li>• Moderate Risk: 80-88cm (31.5-34.6 inches)</li>
                      <li>• High Risk: More than 88cm (34.6 inches)</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-rose-50 p-6 rounded-lg">
          <div className="flex items-center gap-2 mb-3">
            <Target className="h-6 w-6 text-rose-600" />
            <h3 className="text-lg font-semibold text-gray-900">Additional Indicators</h3>
          </div>
          <ul className="space-y-2 text-gray-700">
            <li>• Waist-to-Hip Ratio: Should be below 0.9 for men and 0.85 for women</li>
            <li>• Body Shape: Apple-shaped body types tend to have more visceral fat</li>
            <li>• Firmness: Protruding belly that feels firm rather than soft</li>
            <li>• Visible Signs: Increased abdominal distension over time</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default VisceralFatAssessment;