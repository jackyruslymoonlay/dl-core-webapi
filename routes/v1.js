 var v1BuyerRouter = require('../src/routers/v1/master/buyer-router');
 var v1SupplierRouter = require('../src/routers/v1/master/supplier-router');
 var v1ProductRouter = require('../src/routers/v1/master/product-router');
 var v1UoMRouter = require('../src/routers/v1/master/uom-router');
 var v1UnitRouter = require('../src/routers/v1/master/unit-router');
 var v1CategoryRouter = require('../src/routers/v1/master/category-router');
 var v1CurrencyRouter = require('../src/routers/v1/master/currency-router');
 var v1VatRouter = require('../src/routers/v1/master/vat-router');
 var v1BudgetRouter = require('../src/routers/v1/master/budget-router');
 var v1UnitNiRouter = require('../src/routers/v1/master/division-router');
 var v1MachineRouter = require('../src/routers/v1/master/machine-router');
 var v1UsterRouter = require('../src/routers/v1/master/uster-router');
 var v1LotMachineRouter = require('../src/routers/v1/master/lot-machine-router');
 var v1ThreadSpecificationRouter = require('../src/routers/v1/master/thread-specification-router'); 
 var v1UploadUomRouter = require('../src/routers/v1/master/upload-uom-router');
 var v1UploadBuyerRouter = require('../src/routers/v1/master/upload-buyer-router');
 var v1UploadSupplierRouter = require('../src/routers/v1/master/upload-supplier-router');
 var v1UploadProductRouter = require('../src/routers/v1/master/upload-product-router');
 var v1UploadVatRouter = require('../src/routers/v1/master/upload-vat-router');
 var v1UploadBudgetRouter = require('../src/routers/v1/master/upload-budget-router');
 var v1UploadCurrencyRouter = require('../src/routers/v1/master/upload-currency-router');
 var v1UploadDivisionRouter = require('../src/routers/v1/master/upload-division-router');
 var v1UploadCategoryRouter = require('../src/routers/v1/master/upload-category-router');
 var v1UploadUnitRouter = require('../src/routers/v1/master/upload-unit-router'); 
 var v1LampStandardRouter = require('../src/routers/v1/master/lamp-standard-router'); 
 var v1ProcessTypeRouter = require('../src/routers/v1/master/process-type-router');
 var v1OrderTypeRouter = require('../src/routers/v1/master/order-type-router');
 var v1PowerBiRouter = require('../src/routers/v1/core/power-bi-router');


 module.exports = function(server) {
 
     v1BuyerRouter().applyRoutes(server,                    "/v1/master/buyers");
     v1SupplierRouter().applyRoutes(server,                 "/v1/master/suppliers/");
     v1ProductRouter().applyRoutes(server,                  "/v1/master/products");
     v1UoMRouter().applyRoutes(server,                      "/v1/master/uoms");
     v1UnitRouter().applyRoutes(server,                     "/v1/master/units");
     v1CategoryRouter().applyRoutes(server,                 "/v1/master/categories");
     v1CurrencyRouter().applyRoutes(server,                 "/v1/master/currencies");
     v1VatRouter().applyRoutes(server,                      "/v1/master/vats");
     v1BudgetRouter().applyRoutes(server,                   "/v1/master/budgets");
     v1UnitNiRouter().applyRoutes(server,                   "/v1/master/divisions");
     v1MachineRouter().applyRoutes(server,                  "/v1/master/machines");
     v1UsterRouter().applyRoutes(server,                    "/v1/master/usters");
     v1LotMachineRouter().applyRoutes(server,               "/v1/master/lots");
     v1ThreadSpecificationRouter().applyRoutes(server,      "/v1/master/thread-specifications"); 
     v1UploadUomRouter().applyRoutes(server,                "/v1/master/upload-uoms");
     v1UploadBuyerRouter().applyRoutes(server,              "/v1/master/upload-buyers");
     v1UploadSupplierRouter().applyRoutes(server,           "/v1/master/upload-suppliers");
     v1UploadProductRouter().applyRoutes(server,            "/v1/master/upload-products");
     v1UploadVatRouter().applyRoutes(server,                "/v1/master/upload-vats");
     v1UploadBudgetRouter().applyRoutes(server,             "/v1/master/upload-budgets");
     v1UploadCurrencyRouter().applyRoutes(server,           "/v1/master/upload-currencies");
     v1UploadDivisionRouter().applyRoutes(server,           "/v1/master/upload-divisions");
     v1UploadCategoryRouter().applyRoutes(server,           "/v1/master/upload-categories");
     v1UploadUnitRouter().applyRoutes(server,               "/v1/master/upload-units"); 
     v1LampStandardRouter().applyRoutes(server,             "/v1/master/lamp-standards"); 
     v1ProcessTypeRouter().applyRoutes(server,              "/v1/master/process-types"); 
     v1OrderTypeRouter().applyRoutes(server,                "/v1/master/order-types"); 

     v1PowerBiRouter().applyRoutes(server,                  "/v1/core/power-bi/reports");
 };
 