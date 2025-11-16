import React, { memo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navigation from './Navigation';
import { User, Mail, Phone, Calendar, Users, MapPin, CheckCircle } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';

const RegistrationPage = memo(() => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    // Player Information
    playerFirstName: '',
    playerLastName: '',
    dateOfBirth: '',
    gender: '',
    ageGroup: '',
    medicalConditions: '',

    // Parent/Guardian Information
    parentFirstName: '',
    parentLastName: '',
    relationship: '',
    email: '',
    phone: '',
    alternatePhone: '',

    // Address
    streetAddress: '',
    suburb: '',
    postcode: '',
    state: 'VIC',

    // Emergency Contact
    emergencyName: '',
    emergencyRelationship: '',
    emergencyPhone: '',

    // Additional
    experienceLevel: '',
    preferredPosition: '',
    shirtSize: '',
    terms: false
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, this would send data to a backend
    console.log('Form submitted:', formData);
    setSubmitted(true);
    // Scroll to top
    window.scrollTo(0, 0);
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-gray-50">
        {/* Navigation */}
      <Navigation />

        {/* Success Message */}
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16">
          <Card className="bg-white shadow-xl">
            <CardContent className="p-12 text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-12 h-12 text-green-600" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Registration Submitted!</h2>
              <p className="text-lg text-gray-600 mb-6">
                Thank you for registering with Cranbourne Eagles Basketball Club!
              </p>
              <div className="bg-blue-50 rounded-lg p-6 mb-6 text-left">
                <h3 className="font-bold text-gray-900 mb-2">What happens next?</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start">
                    <span className="text-orange-600 mr-2">•</span>
                    <span>Our team will review your registration within 24-48 hours</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-600 mr-2">•</span>
                    <span>You'll receive a confirmation email at <strong>{formData.email}</strong></span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-600 mr-2">•</span>
                    <span>We'll contact you with team placement and payment details</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-600 mr-2">•</span>
                    <span>Look out for an invitation to attend a trial session</span>
                  </li>
                </ul>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  onClick={() => navigate('/')}
                  className="bg-gradient-to-r from-orange-500 to-blue-600 text-white"
                >
                  Return Home
                </Button>
                <Button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({
                      playerFirstName: '', playerLastName: '', dateOfBirth: '', gender: '',
                      ageGroup: '', medicalConditions: '', parentFirstName: '', parentLastName: '',
                      relationship: '', email: '', phone: '', alternatePhone: '', streetAddress: '',
                      suburb: '', postcode: '', state: 'VIC', emergencyName: '',
                      emergencyRelationship: '', emergencyPhone: '', experienceLevel: '',
                      preferredPosition: '', shirtSize: '', terms: false
                    });
                  }}
                  variant="outline"
                >
                  Register Another Player
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-orange-600 to-blue-600 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Player Registration</h1>
          <p className="text-xl text-orange-100">
            Join the Cranbourne Eagles family and start your basketball journey!
          </p>
        </div>
      </div>

      {/* Registration Form */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8">
        <form onSubmit={handleSubmit}>
          {/* Player Information */}
          <Card className="mb-6">
            <CardContent className="p-6">
              <div className="flex items-center mb-6">
                <User className="w-6 h-6 text-orange-600 mr-2" />
                <h2 className="text-2xl font-bold text-gray-900">Player Information</h2>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">First Name *</label>
                  <input
                    type="text"
                    name="playerFirstName"
                    value={formData.playerFirstName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Last Name *</label>
                  <input
                    type="text"
                    name="playerLastName"
                    value={formData.playerLastName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Date of Birth *</label>
                  <input
                    type="date"
                    name="dateOfBirth"
                    value={formData.dateOfBirth}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Gender *</label>
                  <select
                    name="gender"
                    value={formData.gender}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  >
                    <option value="">Select Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Age Group *</label>
                  <select
                    name="ageGroup"
                    value={formData.ageGroup}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  >
                    <option value="">Select Age Group</option>
                    <option value="U8">U8 (Under 8)</option>
                    <option value="U10">U10 (Under 10)</option>
                    <option value="U12">U12 (Under 12)</option>
                    <option value="U14">U14 (Under 14)</option>
                    <option value="U16">U16 (Under 16)</option>
                    <option value="U18">U18 (Under 18)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">T-Shirt Size *</label>
                  <select
                    name="shirtSize"
                    value={formData.shirtSize}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  >
                    <option value="">Select Size</option>
                    <option value="6">Size 6</option>
                    <option value="8">Size 8</option>
                    <option value="10">Size 10</option>
                    <option value="12">Size 12</option>
                    <option value="14">Size 14</option>
                    <option value="S">Small (Adult)</option>
                    <option value="M">Medium (Adult)</option>
                    <option value="L">Large (Adult)</option>
                    <option value="XL">XL (Adult)</option>
                  </select>
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Experience Level *</label>
                  <select
                    name="experienceLevel"
                    value={formData.experienceLevel}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  >
                    <option value="">Select Experience Level</option>
                    <option value="Beginner">Beginner - Never played before</option>
                    <option value="Novice">Novice - Played recreationally</option>
                    <option value="Intermediate">Intermediate - Some club experience</option>
                    <option value="Advanced">Advanced - Competitive experience</option>
                  </select>
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Medical Conditions / Allergies</label>
                  <textarea
                    name="medicalConditions"
                    value={formData.medicalConditions}
                    onChange={handleChange}
                    rows="3"
                    placeholder="Please list any medical conditions, allergies, or special requirements"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Parent/Guardian Information */}
          <Card className="mb-6">
            <CardContent className="p-6">
              <div className="flex items-center mb-6">
                <Users className="w-6 h-6 text-orange-600 mr-2" />
                <h2 className="text-2xl font-bold text-gray-900">Parent/Guardian Information</h2>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">First Name *</label>
                  <input
                    type="text"
                    name="parentFirstName"
                    value={formData.parentFirstName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Last Name *</label>
                  <input
                    type="text"
                    name="parentLastName"
                    value={formData.parentLastName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Relationship *</label>
                  <select
                    name="relationship"
                    value={formData.relationship}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  >
                    <option value="">Select Relationship</option>
                    <option value="Mother">Mother</option>
                    <option value="Father">Father</option>
                    <option value="Guardian">Guardian</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Phone *</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="04XX XXX XXX"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Alternate Phone</label>
                  <input
                    type="tel"
                    name="alternatePhone"
                    value={formData.alternatePhone}
                    onChange={handleChange}
                    placeholder="04XX XXX XXX"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Address */}
          <Card className="mb-6">
            <CardContent className="p-6">
              <div className="flex items-center mb-6">
                <MapPin className="w-6 h-6 text-orange-600 mr-2" />
                <h2 className="text-2xl font-bold text-gray-900">Address</h2>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="md:col-span-2">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Street Address *</label>
                  <input
                    type="text"
                    name="streetAddress"
                    value={formData.streetAddress}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Suburb *</label>
                  <input
                    type="text"
                    name="suburb"
                    value={formData.suburb}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Postcode *</label>
                  <input
                    type="text"
                    name="postcode"
                    value={formData.postcode}
                    onChange={handleChange}
                    required
                    pattern="[0-9]{4}"
                    placeholder="3977"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">State *</label>
                  <select
                    name="state"
                    value={formData.state}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  >
                    <option value="VIC">Victoria</option>
                    <option value="NSW">New South Wales</option>
                    <option value="QLD">Queensland</option>
                    <option value="SA">South Australia</option>
                    <option value="WA">Western Australia</option>
                    <option value="TAS">Tasmania</option>
                    <option value="NT">Northern Territory</option>
                    <option value="ACT">Australian Capital Territory</option>
                  </select>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Emergency Contact */}
          <Card className="mb-6">
            <CardContent className="p-6">
              <div className="flex items-center mb-6">
                <Phone className="w-6 h-6 text-orange-600 mr-2" />
                <h2 className="text-2xl font-bold text-gray-900">Emergency Contact</h2>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Contact Name *</label>
                  <input
                    type="text"
                    name="emergencyName"
                    value={formData.emergencyName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Relationship *</label>
                  <input
                    type="text"
                    name="emergencyRelationship"
                    value={formData.emergencyRelationship}
                    onChange={handleChange}
                    required
                    placeholder="e.g., Father, Mother, Uncle"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Emergency Phone *</label>
                  <input
                    type="tel"
                    name="emergencyPhone"
                    value={formData.emergencyPhone}
                    onChange={handleChange}
                    required
                    placeholder="04XX XXX XXX"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Terms and Conditions */}
          <Card className="mb-6">
            <CardContent className="p-6">
              <div className="flex items-start">
                <input
                  type="checkbox"
                  name="terms"
                  checked={formData.terms}
                  onChange={handleChange}
                  required
                  className="mt-1 mr-3 w-5 h-5 text-orange-600 focus:ring-orange-500 border-gray-300 rounded"
                />
                <label className="text-sm text-gray-700">
                  I agree to the <button type="button" className="text-orange-600 hover:underline">Terms and Conditions</button> and acknowledge that all information provided is accurate. I understand that registration fees are non-refundable and that players must commit to the full season. *
                </label>
              </div>
            </CardContent>
          </Card>

          {/* Submit Button */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              type="submit"
              className="bg-gradient-to-r from-orange-500 to-blue-600 text-white px-12 py-6 text-lg font-bold"
            >
              Submit Registration
            </Button>
            <Button
              type="button"
              onClick={() => navigate('/')}
              variant="outline"
              className="px-12 py-6 text-lg"
            >
              Cancel
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
});

RegistrationPage.displayName = 'RegistrationPage';

export default RegistrationPage;
