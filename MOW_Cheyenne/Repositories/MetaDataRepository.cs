using System;
using System.Collections.Generic;
using System.Linq;
using MOW_Cheyenne.Data;
using MOW_Cheyenne.Models;

namespace MOW_Cheyenne.Repositories
{
    public class MetaDataRepository
    {
        private readonly ApplicationContext _context;

        public MetaDataRepository(ApplicationContext context)
        {
            _context = context;
        }

        public List<MetaData> GetAllMetaData()
        {
            return _context.MetaDatas.ToList();
        }

        public MetaData GetMetaDataByKey(string key)
        {
            return _context.MetaDatas.Where(context => context.Key == key).Single();
        }

        public MetaData AddMetaData(MetaData data)
        {
            try
            {
                _context.MetaDatas.Add(data);
                _context.SaveChanges();
                return data;
            }
            catch
            {
                throw new Exception($"Meta data: {data} could not be added to the database");
            }

        }

        public MetaData UpdateMetaData(MetaData data)
        {
            try
            {
                _context.MetaDatas.Update(data);
                _context.SaveChanges();
                return data;
            }
            catch
            {
                throw new Exception($"Meta data: {data} could not be updated");
            }

        }

        public void DeleteMetaData(MetaData data)
        {
            try
            {
                _context.MetaDatas.Remove(data);
                _context.SaveChanges();
            }
            catch
            {
                throw new Exception($"Meta data: {data} could not be deleted");
            }

        }
    }
}