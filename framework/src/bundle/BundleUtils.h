/*=============================================================================

  Library: CppMicroServices

  Copyright (c) The CppMicroServices developers. See the COPYRIGHT
  file at the top-level directory of this distribution and at
  https://github.com/CppMicroServices/CppMicroServices/COPYRIGHT .

  Licensed under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License.
  You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software
  distributed under the License is distributed on an "AS IS" BASIS,
  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  See the License for the specific language governing permissions and
  limitations under the License.

=============================================================================*/

#ifndef CPPMICROSERVICES_BUNDLEUTILS_H
#define CPPMICROSERVICES_BUNDLEUTILS_H

#include <functional>
#include <string>
#include <utility>

namespace cppmicroservices
{

    namespace BundleUtils
    {
        // returns the handle to the current executable
        void* GetExecutableHandle();

        // returns the address of the symbol in library libHandle
        void* GetSymbol(void* libHandle, char const* symbol);

        template <typename T>
        void
        GetSymbol(std::function<T>& fptr, void* libHandle, std::string const& symbol)
        {
            void* f = GetSymbol(libHandle, symbol.c_str());
            fptr = reinterpret_cast<T*>(f);
        }

    } // namespace BundleUtils

} // namespace cppmicroservices

#endif // CPPMICROSERVICES_BUNDLEUTILS_H
